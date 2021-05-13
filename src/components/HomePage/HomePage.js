import React, { Fragment } from "react";
import styles from "./HomePage.module.css";
import { NavLink } from "react-router-dom";
import "../../App.css";

export default function HomePage() {
  return (
    <Fragment>
      <div className={styles.full_container}>
        <div className={styles.left_background}>
          <div className={styles.Left_container}>
            <div className={styles.title_container}>
              <h1 className={styles.h4_tag}>I am a self-employed</h1>
              <h1 className={styles.h1_tag}>MERN stack | Web developer</h1>
              <h1 className={styles.h4_tag}>from Jamshedpur, India</h1>
            </div>
            <div className={styles.my_description_container}>
              <p className={styles.my_description}>
                Since 2019 I have been working as web developer in companies
                supporting them in the implementation of modern website
                projects. Regardless of the scope of the project, it is always
                important for me to develop a unique product with a high quality
                and easy scalability.
              </p>
            </div>
            <p className={styles.skill_set_conatiner}>
              <span className={styles.skill_set}>css</span>
              <span className={styles.skill_set}>JavaScript</span>
              <span className={styles.skill_set}>HTML</span>
              <span className={styles.skill_set}>React Js</span>
              <span className={styles.skill_set}>Next Js</span>
              <span className={styles.skill_set}>Node Js</span>
            </p>
            <p className={styles.AboutMe}>
              <NavLink className={styles.AboutMeLink} to="/about-me">
                About Me <i className="fas fa-arrow-right"></i>
              </NavLink>
            </p>
          </div>
        </div>
        <div className={styles.Right_backgound}>
          <div className={styles.Right_container}>
            <h2 className={styles.developers_name} id="developers_name">
              Arvind Kumar Sharma
            </h2>
          </div>
          <div className={styles.ContactMe_conatiner}>
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
          </div>
        </div>
      </div>
    </Fragment>
  );
}
