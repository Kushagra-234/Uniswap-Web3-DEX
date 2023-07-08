import Link from "next/link";
import React from "react";

function Header() {
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
        <div className="connectButton">Connect</div>
      </div>
    </header>
  );
}

export default Header;
