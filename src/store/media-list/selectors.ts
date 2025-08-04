import { RootState } from "@store/index";

const progressValueSelector = (state: RootState) => state.mediaData.progressValue;
const isMainHeroVisibleSelector = (state: RootState) => state.mediaData.isMainHeroVisible;

export { progressValueSelector, isMainHeroVisibleSelector };
