import React from "react";

const Cell = (props) => {

    const [status, setStatus] = React.useState(false);

    const handleChangeImage = () => {
      status ? setStatus(false) : setStatus(true);
      return status;
    };
    const handlePseudoSelector = () => {
      return status ? "_before" : "_after";
    };
  
    const checkBackground = () => {
      return props.name !== props.imageName && handleChangeImage();
    };
  
    React.useEffect(() => {
      checkBackground();
    }, [props.imageName]);

    return (
        <div
          className={`cell ${
            props.name !== props.imageName ? handlePseudoSelector() : ""
          }`}
          style={{
            background: `url("${
              props.name !== props.imageName
                ? props.src
                : "https://cdn.mos.cms.futurecdn.net/kMChxjg6MPHUGGcCparx7b.jpg"
            }")
              no-repeat 0 0 fixed`
          }}
          onMouseEnter={props.onMouseEnter}
        >
          {props.name}
        </div>
      );
}

export default Cell;
