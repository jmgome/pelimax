import React from "react";

export default function ({
  src,
  children,
  className,
  type,
  imageClassName,
  style,
  onClick
}) {
  return (
    <div className="item" style={style}>
      {src && (
        <div className={`${type}`}>
          <img src={src} alt="img" className={`${imageClassName}`} />
        </div>
      )}
      <div className={`children ${className}`}>{children}</div>
      <div onClick={onClick}/>
    </div>
  );
}
