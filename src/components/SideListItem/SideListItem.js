import React from "react";
import { Link } from "react-router-dom";

const SideListItem = ({ id, src, title }) => {
  return (
    <Link to={`/watch?v=${id}`}>
      <img src={src} alt={title}/>
      <p>{title}</p>
      <p>{src}</p>
    </Link>
  );
};

export default SideListItem;
