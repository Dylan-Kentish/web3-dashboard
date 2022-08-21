import React from "react";
import { Hero } from "@web3uikit/core";
import { ConnectButton } from "@web3uikit/web3";

export const ConnectWallet = () => {
  return (
    <section className='not-connected'>
      <Hero
        backgroundURL='https://moralis.io/wp-content/uploads/2021/06/blue-blob-background-2.svg'
        title='My Web3 Dashboard 🚀'
        height='70vh'>
        <ConnectButton />
      </Hero>
    </section>
  );
};
