import React from "react";
import { BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://github.com/Madhukar218"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
