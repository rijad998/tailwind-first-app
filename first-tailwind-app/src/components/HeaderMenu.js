import React, { Component } from "react";

import logo from "./images/logo-white.svg";

class HeaderMenu extends Component {
  render() {
    return (
      <div className = "ContentWidth flex flex-col text-left">
        <div className="pt-4 Menu flex justify-between items-baseline">
          <div className="VerticalMiddleAlign">
            <img
              src={logo}
              className="AppLogo align-middle inline-block"
              alt="logo"
            />
            <p className="font-normal text-base text-white align-middle inline-block">
              Venture Cost
            </p>
          </div>

          <div className="VerticalMiddleAlign text-right">
            <ul>
              <li className="align-middle inline-block Link">
                <a href="https://venturecost.com/">Explore</a>
              </li>
              <li className="pl-3 align-middle inline-block Link">
                <a href="https://venturecost.com/">Users</a>
              </li>
              <li className="pl-3 align-middle inline-block Link">
                <a href="https://venturecost.com/">Donate</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="HeaderMain flex justify-between">
          <div className="VerticalMiddleAlign text-left">
            <h1 className="text-3xl font-bold">
              Track Your Adventures
            </h1>
            <p className="font-normal text-base text-white">
              Track your travel expenses and discover new places to visit. All 
              numbers are based on expenses from real trips by real people 
              tracked within Venture Cost. Start your travel profile and join the 
              community today for free!
            </p>
          </div>

          <div className="VerticalMiddleAlign text-right pr-5 pt-10">
            <p className="text-l font-bold text-white">Comments...</p>
            <p className="text-l font-bold text-white">Comments...</p>
            <p className="text-l font-bold text-white">Comments...</p>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderMenu;
