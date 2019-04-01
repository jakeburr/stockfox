import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <ul className="inline-flex list-inline">
        <li className="list-inline-item">
          <a href="https://github.com/jakeburr">
            <i className="fab fa-github fa-3x" />
          </a>
        </li>
      </ul>
      <small>View more on Github.</small>
      <hr style={{ visibility: "hidden" }} />
      <p>Copyright &copy; {new Date().getFullYear()} StockFox</p>
    </footer>
  );
};
export default Footer;
