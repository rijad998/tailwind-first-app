import React, { Component } from "react";

import logo from "./images/logo-white.svg";

class HeaderMenu extends Component {
  render() {
    return (
      <div className = "ContentWidth flex flex-col">
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

          <div className="VerticalMiddleAlign">
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

        <div className="HeaderMain flex justify-between items-baseline">
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

          <div className="VerticalMiddleAlign">
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
      </div>
    );
  }
}

export default HeaderMenu;
