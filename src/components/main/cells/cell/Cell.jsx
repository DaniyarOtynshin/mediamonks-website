import React from "react";

class Cell extends React.Component {
  render() {
    return this.props.isActive ? (
      <div
        className="cell"
        style={{
          width: "302px",
          height: "380px",
          background: `url("${this.props.src}")
          no-repeat 0 0 fixed`,
          transition: "all 0.3s ease-in 0s"
        }}
        onMouseEnter={this.props.onMouseEnter}
      >
        {this.props.name}
      </div>
    ) : (
      <div
        className="cell"
        style={{
          width: "302px",
          height: "380px",
          background: `url("https://cdn.mos.cms.futurecdn.net/kMChxjg6MPHUGGcCparx7b.jpg")
          no-repeat 0 0 fixed`,
          transition: "all 0.3s ease 0s"
        }}
        onMouseEnter={this.props.onMouseEnter}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Cell;
