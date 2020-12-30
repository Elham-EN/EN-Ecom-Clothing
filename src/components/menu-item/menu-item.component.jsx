import React from "react";
import "./menu-item.styles.scss";

//Reuseable MenuItem component & destructure from the props passed in the parameter
const MenuItem = (props) => {
  return (
    <div className={`${props.size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
