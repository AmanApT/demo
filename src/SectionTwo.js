import React from "react";

const SectionTwo = () => {
  return (
    <div className="sectionTwo">
      <div className="twoCard">
        <h2>You can claim AIDOGE now!</h2>
        <div className="twoCardDiv1">
          A total of 210,000,000,000,000,000 AIDOGE tokens are now available to
          be claimed by those who have claimed the ARB airdrop.
        </div>
        <div className="twoCardDiv2">
          AIDOGE tokens that have not been claimed within 31 days will be used
          for the Community Long-Term Incentive Reward Program. The AIDOGE will
          be distributed to the top contributors of Arbitrum community and
          burned.
        </div>
        <div className="twoCardDiv3">
          <div className="twoCardDiv3-child">
            <svg
              viewBox="0 0 14 14"
              width="14"
              color="text"
              xmlns="http://www.w3.org/2000/svg"
              class="Svg-sc-1idgvhl-0 djTIXR"
            >
              <defs>
                <linearGradient
                  x1="0%"
                  y1="50%"
                  x2="100%"
                  y2="50%"
                  id="linearGradient-1"
                >
                  <stop stop-color="#FBAF29" offset="0%"></stop>
                  <stop stop-color="#F67712" offset="100%"></stop>
                </linearGradient>
              </defs>
              <g
                id="g"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M7,0 C10.865993,0 14,3.13400664 14,7 C14,10.865993 10.865993,14 7,14 C3.13400664,14 0,10.865993 0,7 C0,3.13400664 3.13400664,0 7,0 Z M7.8,2.2 L6.2,2.2 L6.2,7.33137093 L8.83431454,9.96568527 L9.96568527,8.83431473 L7.8,6.66862946 L7.8,2.2 Z"
                  id="path"
                  fill="url(#linearGradient-1)"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
            <div>2023.04.15 02:30-2023.05.15 02:30</div>
          </div>
        </div>
        <div className="twoCardDiv4">
          <div className="twoCardDiv4-one">Received</div>
          <div className="twoCardDiv4-two">210,000,000,000,000,000</div>
        </div>
        <div className="twoCardDiv5">
          <div className="progressBar">
            <div className="progressBarChild"></div>
          </div>
        </div>
        <div className="twoCardDiv6">
          <input value="0" />
        </div>
        <div className="twoCardDiv7">
          <button>Ended</button>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
