import React from "react";
import image from "./sectionThree.png";

const SectionThree = () => {
  return (
    <div className="sectionThree">
      <img className="sectionThreeImage" src={image} />
      <div className="sectionThreeDescription">
        <p className="sectionThreeHeading"> What is AIDOGE? </p>
        <p className="sectionThreeParagraph">
          AIDOGE is a deflationary token. It will be used by AIDOGE ecosystem
          applications. The total supply is 210,000,000,000,000,000 tokens.
          AIDOGE belongs to everyone in the Arbitrum community and is also a
          necessary key to unlock the future chapters of the AIDOGE story.
          </p>
          <p className="sectionThreeParagraph">
          AIDOGE has a 15% burning tax, so adjusting your slippage tolerance to
          around 20% is suggested when buying/selling to ensure your successful
          transactions. Every time you buy AIDOGE, you will receive a Lucky Drop
          ticket with a chance to win an ARB prize based on the purchase amount.
          You can also stake your AIDOGE to earn more.
        </p>
        <div className="sectionThreeButtons">
            <div className="sectionThreeButtons1"> Buy AIDOGE</div>
            <div className="sectionThreeButtons2"> View Docs </div>
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
