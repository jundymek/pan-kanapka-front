import React from "react";

function Button({ label, variant, onClick }) {


  const className = {
    "cancel": "button button--cancel",
    "confirm": "button button--confirm",
    "delete": "button button--delete",
    "submit": "button button--submit",
    "add": "button button--add",
    "mobile": "button-mobile"
  }

  return (
    <button onClick={onClick} className={className[variant]}>
      {label}
    </button>
  );
}

export default Button;
