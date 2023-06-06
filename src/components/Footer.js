import React from 'react';
import {
    AiFillGithub,
} from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="footer fixed-bottom text-center text-white" style={{ backgroundColor: "#f1f1f1" }}>
      <div className="container pt-0">
        <a
          className="btn btn-link btn-floating btn-lg text-dark m-1"
          href="https://github.com/rockhehe"
          role="button"
          data-mdb-ripple-color="dark"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={50} />
        </a>
      </div>

      <div className="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        Made by Akshit 
      </div>
    </footer>
  );
};

export default Footer;



