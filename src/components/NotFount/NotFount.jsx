import React from "react";

export const NotFound = ({ title, buttonText, buttonAction }) => {
  return (
    <div className="dialoge-notFaunt">
      <h1 className="notFaunt-title">{title}</h1>
      <button className="btn-notFaunt" onClick={buttonAction}>
        {buttonText}
      </button>
    </div>
  );
};
