import React from "react";
import Card1 from "./card_1.png";
import Card2 from "./card_2.png";
import Card3 from "./card_3.png";
import Card4 from "./card_4.png";

const Cards = () => {
  return (
    <div className="cards">
      <div className="cardsChild">
        <div>
          <div className="cardsRow">
            <div className="card1">
              <div className="card1-child">
                <div>
                  <img className="card1-img" src={Card1} />
                </div>
                <div className="card1-text">
                  <div className="card1-heading">AIDOGE</div>
                  <div className="card1-subHead">Get Started</div>
                </div>
                <div className="card1-shadow"></div>
              </div>
            </div>
            {/* ---------- */}
            <div className="card1">
              <div className="card1-child">
                <div>
                  <img className="card1-img" src={Card2} />
                </div>
                <div className="card1-text">
                  <div className="card1-heading">AICODE</div>
                  <div className="card1-subHead">Get Started</div>
                </div>
                <div className="card1-shadow"></div>
              </div>
            </div>
            {/* -------------- */}
            <div className="card1">
              <div className="card1-child">
                <div>
                  <img className="card1-img" src={Card3} />
                </div>
                <div className="card1-text">
                  <div className="card1-heading">NFT Prologue</div>
                  <div className="card1-subHead">Get Started</div>
                </div>
                <div className="card1-shadow"></div>
              </div>
            </div>
            {/* -----------------*/}
            <div className="card1">
              <div className="card1-child">
                <div>
                  <img className="card1-img" src={Card4} />
                </div>
                <div className="card1-text">
                  <div className="card1-heading">AIDOGE Vault</div>
                  <div className="card1-subHead">Get Started</div>
                </div>
                <div className="card1-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
