import React from "react";
import Cell from "../Cell/Cell";

import compaignsAndContentPath from '../../assets/wallpapers/compaignsandcontent.jpg';
import filmsPath from '../../assets/wallpapers/films.jpg';
import mobilePath from '../../assets/wallpapers/mobile.jpg';
import gamesPath from '../../assets/wallpapers/games.jpg';
import vfxPath from '../../assets/wallpapers/vfx.jpg';
import animationPath from '../../assets/wallpapers/animation.jpg';
import vrPath from '../../assets/wallpapers/vr.jpg';
import experimentalPath from '../../assets/wallpapers/experimental.jpg';
import richMediaPath from '../../assets/wallpapers/richmedia.jpg';
import forGoodPath from '../../assets/wallpapers/forgood.jpg';

let blocksInfo = [
  {
    name: "compaigns and content",
    src: compaignsAndContentPath
  },
  {
    name: "films",
    src: filmsPath
  },
  {
    name: "mobile & platforms",
    src: mobilePath
  },
  {
    name: "games",
    src: gamesPath
  },
  {
    name: "vfx & post",
    src: vfxPath
  },
  {
    name: "anmation",
    src: animationPath
  },
  {
    name: "vr",
    src: vrPath
  },
  {
    name: "experimental",
    src: experimentalPath
  },
  {
    name: "rich media",
    src: richMediaPath
  },
  {
    name: "for good",
    src: forGoodPath
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
        <div className="cells">
            {blocksInfo.map((block, index) => {
            return (
                <Cell
                key={index}
                id={index + 1}
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
