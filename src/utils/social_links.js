import React from "react";
import {
  FaReddit,
  FaFacebook,
  FaInstagram,
  FaFacebookMessenger,
  FaGoogle,
} from "react-icons/fa";
//Social_links are placed into an array. They are iterated in Hero.js and Footer.js components
const data = [
  {
    id: 1,
    icon: <FaFacebook className="social-icon"></FaFacebook>,
    url: "https://www.facebook.com",
  },
  {
    id: 2,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com",
  },
  {
    id: 3,
    icon: <FaFacebookMessenger className="social-icon"></FaFacebookMessenger>,
    url: "https://m.me/",
  },
  {
    id: 4,
    icon: <FaGoogle className="social-icon"></FaGoogle>,
    url: "https://www.google.com/maps",
  },
  {
    id: 5,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.reddit.com/",
  },
];

export default data;
