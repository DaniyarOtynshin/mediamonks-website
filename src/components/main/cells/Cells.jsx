import React from "react";
import Cell from "./cell/Cell";

import waterPath from '../../../assets/wallpapers/water.jpg';
import canyonPath from '../../../assets/wallpapers/canyon.jpg';
import castlePath from '../../../assets/wallpapers/castle.jpg';
import circlePath from '../../../assets/wallpapers/circle.jpg';
import cityPath from '../../../assets/wallpapers/city.jpg';
import manPath from '../../../assets/wallpapers/man.jpg';
import mountPath from '../../../assets/wallpapers/mount.jpg';
import oceanPath from '../../../assets/wallpapers/ocean.jpg';
import riverPath from '../../../assets/wallpapers/river.jpg';
import roadPath from '../../../assets/wallpapers/road.jpg';

let blocksInfo = [
  {
    name: "Water",
    src: waterPath
  },
  {
    name: "Canyon",
    src: canyonPath
  },
  {
    name: "Castle",
    src: castlePath
  },
  {
    name: "Circle",
    src: circlePath
  },
  {
    name: "City",
    src: cityPath
  },
  {
    name: "Man",
    src: manPath
  },
  {
    name: "Mount",
    src: mountPath
  },
  {
    name: "Ocean",
    src: oceanPath
  },
  {
    name: "River",
    src: riverPath
  },
  {
    name: "Road",
    src: roadPath
  },
];

class Cells extends React.Component {
    constructor(data) {
        super();
        this.data = data;
        this.state = {
            index: -1,
            src: "https://cdn.mos.cms.futurecdn.net/kMChxjg6MPHUGGcCparx7b.jpg"
        };
    }

    onMouseEnter(index) {
        this.setState({
            src: blocksInfo[index].src,
            name: blocksInfo[index].name,
            index
        });
    }

    handleSrc(index) {
        return index !== this.state.index ? this.state.src : "";
    }

    render() {
        return (
        <div className="page__main cells">
            {blocksInfo.map((block, index) => {
            return (
                <Cell
                key={index}
                imageName={this.state.name}
                name={block.name}
                src={this.handleSrc(index)}
                onMouseEnter={() => this.onMouseEnter(index)}
                />
            );
            })}
        </div>
        );
    }
}

export default Cells;
