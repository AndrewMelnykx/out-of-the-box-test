import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HeroGreenButton } from "../components/HeroGreenButton/HeroGreenButton";
import { useAnimation } from "motion/react";
import { UseStoreDispatcher } from "@store/index";
import { handleEntryHeroButton } from "@store/media-list/slice";

jest.mock("motion/react", () => ({
  ...jest.requireActual("motion/react"),
  useAnimation: jest.fn(),
}));

jest.mock("@store/index", () => ({
  UseStoreDispatcher: jest.fn(),
}));

jest.mock("@store/media-list/slice", () => ({
  handleEntryHeroButton: jest.fn(),
}));

jest.mock("@images/hero/GreenButtonFrame.svg", () => "GreenButtonFrame.svg");
jest.mock("@images/hero/GreenButtonBars.svg", () => "GreenButtonBars.svg");
jest.mock("@images/hero/GreenButtonWhiteFrame.svg", () => "GreenButtonWhiteFrame.svg");
jest.mock("@assets/images/hero/Pointer.svg", () => "Pointer.svg");

describe("HeroGreenButton", () => {
  const startMock = jest.fn();
  const dispatchMock = jest.fn();

  beforeEach(() => {
    useAnimation.mockReturnValue({ start: startMock });
    UseStoreDispatcher.mockReturnValue(dispatchMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders all visual elements", () => {
    render(<HeroGreenButton />);
    expect(screen.getAllByRole("img")).toHaveLength(5);
    expect(screen.getByRole("button", { name: /enter/i })).toBeInTheDocument();
  });

  it("triggers animation on mount", () => {
    render(<HeroGreenButton />);
    expect(startMock).toHaveBeenCalledWith({
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    });
  });

  it("dispatches action on button click", () => {
    render(<HeroGreenButton />);
    const button = screen.getByRole("button", { name: /enter/i });
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledWith(handleEntryHeroButton(true));
  });
});
