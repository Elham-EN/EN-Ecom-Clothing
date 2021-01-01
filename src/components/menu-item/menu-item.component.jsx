import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

//Reuseable MenuItem component & destructure from the props passed in the parameter
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  console.log(match);
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

//Higher order component takes a component and returns a new component with
//access to those location, match and history props
export default withRouter(MenuItem);
