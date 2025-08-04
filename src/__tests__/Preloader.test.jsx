import React from "react";
import { render, screen, act } from "@testing-library/react";
import { useSelector } from "react-redux";
import Preloader from "../components/Preloader/index";
import { hundredPercent } from "@helpers/constants";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));
jest.mock("@store/index", () => ({
  UseStoreDispatcher: () => jest.fn(),
}));
jest.mock("@helpers/funcs", () => ({
  handleProgress: jest.fn(() => jest.fn()),
}));
jest.mock("@components/Preloader/logos.tsx", () => ({
  Logos: () => <div data-testid="logos" />,
}));
jest.mock("@components/Progress", () => ({
  ProgressTrack: () => <div data-testid="progress-track" />,
}));

describe("Preloader Component", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.resetAllMocks();
  });

  it("renders correctly when progress is less than 100%", () => {
    useSelector.mockReturnValue(50);

    render(<Preloader />);

    expect(screen.getByAltText("glare-img")).toBeInTheDocument();
    expect(screen.getByAltText("background-img")).toBeInTheDocument();
    expect(screen.getByTestId("logos")).toBeInTheDocument();
    expect(screen.getByTestId("progress-track")).toBeInTheDocument();
  });

  it("hides after progress reaches 100%", () => {
    useSelector.mockReturnValue(hundredPercent);

    render(<Preloader />);
    expect(screen.getByAltText("glare-img")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000); // simulate oneSecond
    });

    expect(screen.queryByAltText("glare-img")).not.toBeInTheDocument();
  });

  it("calls cleanup function on unmount", () => {
    const cleanupMock = jest.fn();
    const handleProgressMock = require("@helpers/funcs").handleProgress;
    handleProgressMock.mockReturnValue(cleanupMock);

    useSelector.mockReturnValue(0);

    const { unmount } = render(<Preloader />);
    unmount();

    expect(cleanupMock).toHaveBeenCalled();
  });

  it("does not render when visible is false", () => {
    useSelector.mockReturnValue(hundredPercent);

    const { container } = render(<Preloader />);
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(container.firstChild).toBeNull();
  });
});
