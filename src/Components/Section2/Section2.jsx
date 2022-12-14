import React from "react";
import "./Section2.css";
import { Element } from "react-scroll";

const Section2 = () => {
  return (
    <>
      <Element id="section-2" className="section-2" name="example-destination">
        <h1>
          Why <span>AuthX</span> ?
        </h1>
        <p>
          AuthX is very important because UX is the biggest barrier in user
          growth across Web3 applications. Masses are not comfortable with
          wallets, Seed phrase, private key and all such stuff. They need easier
          ways to interact with web3, ideally what they have been using in web2.
        </p>
        <p>
          AuthX enables web3 apps to leverage the simplicity and distribution of
          web2 user id's to onboard new users and offer them a smooth UX.
        </p>
      </Element>
    </>
  );
};

export default Section2;
