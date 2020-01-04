import React, { useState } from "react";

function Hamburger() {
  const [isOpen, setisOpen] = useState(false);

  const handleOpen = () => {
    setisOpen(prevState => !prevState);
    console.log(isOpen);
  };
  return (
    <div>
      <button class={!isOpen ? "hamburger" : "hamburger hamburger--open"} onClick={handleOpen} type="button"></button>
    </div>
  );
}

export default Hamburger;
