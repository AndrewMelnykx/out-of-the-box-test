import { motion } from "framer-motion";

import { Logos } from "@components/Preloader/logos";
import { HeroGreenButton } from "@components/custom/HeroEntryButton";
import { HeroEntryBlackButton } from "@components/custom/HeroEntryButton/black";
import { HeroEntryFooter } from "./footer";

import "./index.scss";

const HeroContent = () => {
  return (
    <motion.div className="entry-hero__content-wrapper">
      <HeroEntryBlackButton />

      <Logos wakandaScale={1.2} spriteScale={1.2} theHallScale={2} />
      <motion.div className="entry-hero__text-animation">
        <div className="entry-hero__text-line">
          <span className="entry-hero__text">Explore new paths.</span>
          <span className="entry-hero__text-line-wrapper" />
        </div>
        <div className="entry-hero__text-line">
          <span className="entry-hero__text">Find your gift.</span>
          <span className="entry-hero__text-line-wrapper" />
        </div>
      </motion.div>
      <HeroGreenButton />
      <HeroEntryFooter />
    </motion.div>
  );
};

export default HeroContent;
