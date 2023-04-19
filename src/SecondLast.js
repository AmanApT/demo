import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';

const SecondLast = () => {
  return (
    <div className="secondLastSection">
      <p>
        The secret weapon that humans have over AI is "intuition." Your
        intuition tells you to join our great community.
      </p>
      <div className="secondLastLogos">
        <FontAwesomeIcon className="secondLastLogos1" icon={faTwitter} />
        <FontAwesomeIcon className="secondLastLogos1" icon={faDiscord} />
        <FontAwesomeIcon className="secondLastLogos1" icon={faMedium} />
      </div>
    </div>
  );
};

export default SecondLast;

