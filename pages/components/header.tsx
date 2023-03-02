import Link from "next/link";
import React from "react";

// header component

function Header({ isConnected, address, connect }) {
  return (
    <header>
      <div className="leftH">
        <img src="/moralis-logo.svg" alt="loading" className="logo" />
        <Link href="/swap">
          <div className="headerItem">Swap</div>
        </Link>
        <Link href="/token">
          <div className="headerItem">Tokens</div>
        </Link>
      </div>
      <div className="rightH">
        <div className="headerItem">
          <img src="/eth.svg" alt="loading.." className="eth" />
          Etherium
        </div>
        <div className="connectButton" onClick={connect}>
          {isConnected
            ? address.slice(0, 4) + "..." + address.slice(38)
            : "Connect Wallet"}
        </div>
      </div>
    </header>
  );
}

export default Header;



// 0xdf1d11025f2a22b9dc01c7a100b4f6ddebac82a3;