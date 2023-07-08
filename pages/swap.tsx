import { Popover } from "antd";
import React, { useState } from "react";
import { Input, Radio, Modal, message } from "antd";
import {
  ArrowDownOutlined,
  DownOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import tokenList from "../utils/tokenList.json";

const Swap = () => {
  const [slippage, setSlippage] = useState(2.5);
  const [tokenOneAmount, setTokenOneAmount] = useState(null);
  const [tokenTwoAmount, setTokenTwoAmount] = useState(null);
  const [tokenOne, setTokenOne] = useState(tokenList[0]);
  const [tokenTwo, setTokenTwo] = useState(tokenList[1]);

  function handleSlippageChange(e) {
    setSlippage(e.target.value);
  }

  const changeAmount = (e) => {
    setTokenOneAmount(e.target.value);
  };

  const switchTokens = () => {
    const one = tokenOne;
    const two = tokenTwo;

    setTokenOne(two);
    setTokenTwo(one);
  };
  const settings = (
    <>
      <div>Slippage Tolerance</div>
      <div>
        <Radio.Group value={slippage} onChange={handleSlippageChange}>
          <Radio.Button value={0.5}>0.5%</Radio.Button>
          <Radio.Button value={2.5}>2.5%</Radio.Button>
          <Radio.Button value={5}>5.0%</Radio.Button>
        </Radio.Group>
      </div>
    </>
  );
  return (
    <div className="ms-5 tradeBox">
      <div className="tradeBoxHeader">
        <h4 className="mt-2">Swap</h4>
        <Popover
          content={settings}
          title="Settings"
          trigger="click"
          placement="bottomRight"
        >
          <SettingOutlined className="cog mt-2" />
        </Popover>
      </div>
      <div className="inputs">
        <Input
          className="mt-3"
          placeholder="0"
          value={tokenOneAmount}
          onChange={changeAmount}
        />
        <Input placeholder="0" value={tokenTwoAmount} disabled={true} />
        <div className="switchButton mt-3 me-2" onClick={switchTokens}>
          <ArrowDownOutlined className="switchArrow" />
        </div>
        <div className="assetOne" onClick={() => openModal(1)}>
          <img src={tokenOne.img} alt="assetOneLogo" className="assetLogo" />
          {tokenOne.ticker}
          <DownOutlined />
        </div>
        <div className="assetTwo" onClick={() => openModal(2)}>
          <img src={tokenTwo.img} alt="assetOneLogo" className="assetLogo" />
          {tokenTwo.ticker}
          <DownOutlined />
        </div>
      </div>
    </div>
  );
};

export default Swap;
