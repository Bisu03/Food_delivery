import React from "react";

const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30px",
        height: "30px",
        paddingTop: "3px",
      }}
      onClick={onClick}
    ></div>
  );
};

export default NextArrow;
