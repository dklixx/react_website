import React from 'react';
import '../App.css'; 

import vk from "../img/vk.svg";
import instagram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import linkedIn from "../img/linkedIn.svg";
import gitHub from "../img/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/" target="_blank"><img src={vk} alt="VK" /></a>
            </li>
            <li className="social__item">
              <a href="https://www.instagram.com/__mmildred__/" target="_blank"><img src={instagram} alt="Instagram" /></a>
            </li>
            <li className="social__item">
              <a href="https://x.com/?lang=ru" target="_blank"><img src={twitter} alt="Twitter" /></a>
            </li>
            <li className="social__item">
              <a href="https://pikabu.ru/story/zhizn_programmista_7865696" target="_blank"><img src={linkedIn} alt="LinkedIn" /></a>
            </li>
            <li className="social__item">
              <a href="https://github.com/" target="_blank"><img src={gitHub} alt="GitHub" /></a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 ya zakhonchila uraa.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;