import React from "react";
import Marquee from "react-fast-marquee";

const MarqDiv = () => {
  return (
    <div style={{ paddingTop: "13%" }}>
      <Marquee
        style={{
          color: "white",
          backgroundColor: "#081B2F",
          paddingTop: "2%",
          paddingBottom: "2%",
        }}
        gradient={false}
        speed={40}
      >
        <div className="marqueeChild">
          <div>210,000T</div>
          <div
            style={{ textAlign: "center", fontFamily: "Monrope, sans-serif" }}
          >
            AIDOGE Total Supply
          </div>
        </div>
        <div className="marqueeChild">
          <div>210,617T</div>
          <div
            style={{ textAlign: "center", fontFamily: "Monrope, sans-serif" }}
          >
            AIDOGE Currency Supply
          </div>
        </div>
        <div className="marqueeChild">
          <div>210,000T</div>
          <div
            style={{ textAlign: "center", fontFamily: "Monrope, sans-serif" }}
          >
            AIDOGE Total Supply
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqDiv;
