import React, { Component } from "react";

import "./style.scss";
import SetupInformation from "./SetupInformation.js";

class Setup extends Component {
  render() {
    return (
      <div id="all">
        <h1 id="title">Setup</h1>
        <SetupInformation />
      </div>
    );
  }
}

export default Setup;
