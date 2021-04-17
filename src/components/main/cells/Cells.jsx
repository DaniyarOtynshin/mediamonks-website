import React from "react";
import Cell from "./cell/Cell";

let blocksInfo = [
  {
    name: "Games",
    src:
      "https://www.thqnordic.com/sites/default/files/games/slider/backgrounds/SLIDER_Chronos_Keyart_final_0.png"
  },
  {
    name: "Films",
    src:
      "https://www.clickorlando.com/resizer/JnAjB-UOTefQBtn2C-bxmru2G4U=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/72OJBQJ5MZDXZFEOGR7TKHO5UM.jpg"
  },
  {
    name: "Music",
    src:
      "https://media.macphun.com/img/uploads/customer/how-to/579/15349455575b7d6915922366.87402403.jpg"
  },
  {
    name: "Sport",
    src:
      "https://stillmedab.olympic.org/media/Images/OlympicOrg/IOC/What_We_Do/Promote_Olympism/Sport_And_Active_Society/Sport-And-Active-Society-Programmes-introduction-02.jpg"
  },
  {
    name: "Games",
    src:
      "https://www.thqnordic.com/sites/default/files/games/slider/backgrounds/SLIDER_Chronos_Keyart_final_0.png"
  },
  {
    name: "Films",
    src:
      "https://www.clickorlando.com/resizer/JnAjB-UOTefQBtn2C-bxmru2G4U=/1280x720/smart/filters:format(jpeg):strip_exif(true):strip_icc(true):no_upscale(true):quality(65)/arc-anglerfish-arc2-prod-gmg.s3.amazonaws.com/public/72OJBQJ5MZDXZFEOGR7TKHO5UM.jpg"
  },
  {
    name: "Music",
    src:
      "https://media.macphun.com/img/uploads/customer/how-to/579/15349455575b7d6915922366.87402403.jpg"
  },
  {
    name: "Sport",
    src:
      "https://stillmedab.olympic.org/media/Images/OlympicOrg/IOC/What_We_Do/Promote_Olympism/Sport_And_Active_Society/Sport-And-Active-Society-Programmes-introduction-02.jpg"
  },
  {
    name: "Music",
    src:
      "https://media.macphun.com/img/uploads/customer/how-to/579/15349455575b7d6915922366.87402403.jpg"
  },
  {
    name: "Sport",
    src:
      "https://stillmedab.olympic.org/media/Images/OlympicOrg/IOC/What_We_Do/Promote_Olympism/Sport_And_Active_Society/Sport-And-Active-Society-Programmes-introduction-02.jpg"
  }
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
      index
    });
  }

  onMouseLeave(index) {
    this.setState({
      src: blocksInfo[index].src,
      index
    });
  }

  handleActive(index) {
    return index !== this.state.index ? true : false;
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
              className="cell"
              name={block.name}
              isActive={this.handleActive(index)}
              src={this.handleSrc(index)}
              onMouseEnter={() => this.onMouseEnter(index)}
              onMouseLeave={() => this.onMouseLeave(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default Cells;
