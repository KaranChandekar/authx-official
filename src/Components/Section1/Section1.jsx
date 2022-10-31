import React from "react";
import "./Section1.css";
import arrow from "../Images/arrow.png";
import whatsapp from "../Images/whatsapp-logo.png";
import discord from "../Images/discord-logo.png";
import twitter from "../Images/twitter-logo.png";
import gmail from "../Images/gmail-logo.png";
import polygon from "../Images/polygon-logo.png";
import ethereum from "../Images/ethereum-logo.png";
import solana from "../Images/solana-logo.png";
import polkadot from "../Images/polkadot-logo.png";
import cosmos from "../Images/cosmos-atom-logo.png";
import tron from "../Images/tron-logo.png";
import bnb from "../Images/bnb-logo.png";

const Section1 = () => {
  return (
    <div className="section-1">
      <div className="text">
        <h1>
          <span>On-Chain</span>
          <br /> Identity Bridge
        </h1>
        <p>
          Smart Contract protocol for decentralised Authentication of Web2 Id's
          and user account on Blockchain.
        </p>
        <div className="btn-wrapper">
          <button className="btn btn-left">Get Started</button>
          <button className="btn btn-right">How it Works?</button>
        </div>
      </div>
      <div className="img-container">
        <div className="img-wrapper">
          <img src={whatsapp} alt="whatsapp" />
          <img src={discord} alt="discord" />
          <img src={twitter} alt="twitter" />
          <img src={gmail} alt="gmail" />
        </div>
        <div className="img-wrapper arrow-wrapper">
          <img src={arrow} alt="arrow" className="arrow-img" />
        </div>
        <div className="img-wrapper">
          <img src={polkadot} alt="polkadot" />
          <img src={solana} alt="solana" />
          <img src={polygon} alt="polygon" />
          <img src={ethereum} alt="ethereum" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
