import React from "react";

const curryear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p > Coppyright @ The Civil Today {curryear} </p>
    </footer>
  );
}

export default Footer;
