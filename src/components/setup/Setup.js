import React, { Component, createRef } from "react";

import "./style.scss";
import Data from "./Data.js";

class Setup extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.onMouseMove = this.onMouseMove.bind(this);
    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    };
  }

  onMouseMove(e) {
    this.setState({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY
    });
  }
  updateDimensions = () => {
    this.setState({
      width: this.ref.current.offsetWidth,
      height: this.ref.current.offsetHeight
    });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("load", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
    window.removeEventListener("load", this.updateDimensions);
  }
  render() {
    const { x, y, width, height } = this.state;
    const width_pc = (x * 100) / width;
    const heigth_pc = (y * 100) / height;
    const data = Data(width_pc, heigth_pc);

    return (
      <div id="all">
        <h1 id="title">Setup</h1>
        <div className="el-meollo">
          <img
            src={data.img}
            ref={this.ref}
            alt={data.alt}
            onMouseMove={this.onMouseMove}
          />
          <div id="setup-info">
            {data.title && <h1>{data.title}</h1>}
            <div>
              {data.txt.map(element => (
                <p>{element} </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Setup;
