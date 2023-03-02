import React from "react";
import { Popover } from "antd";
import { Button } from "antd";
import Header from "./components/header";
import Swap from "./components/swap";
import { useConnect, useAccount } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const index = () => {
  const { address, isConnected } = useAccount();
  console.log(address);

  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });
  return (
    <div>
      <Header connect={connect} isConnected={isConnected} address={address} />
      <Swap isConnected={isConnected} address={address} />
    </div>
  );
};

export default index;
