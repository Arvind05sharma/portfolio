import React from "react";
import styles from "../HomePage/HomePage.module.css";

function Footer() {
  return (
    <div>
      <footer id="tg-footer" className="tg-footer tg-haslayout">
        <div className="tg-footerbar">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <a
                  className={styles.SideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Arvind05sharma"
                >
                  <span className={styles.contactMe}>Github</span>
                </a>
                <a
                  className={styles.SideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/"
                >
                  <span className={styles.contactMe}>LinkedIn</span>
                </a>
                <a
                  className={styles.SideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/mr_sharma__7/"
                >
                  <span className={styles.contactMe}>Instagram</span>
                </a>
                <a className={styles.SideLink} href="/">
                  <span className={styles.contactMe}>Contact</span>
                </a>
                <a className={styles.copyright} href="/">
                  <span>Copyright &copy; 2021 Portfoilo. All rights reserved</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
