import React, { Fragment } from "react";
import styles from "./aboutme.module.css";
import proimage from "./side.jpg";

const AboutMe = (props) => {
  const BackToHome = (e) => {
    e.preventDefault();
    props.history.push(`/`);
  };

  return (
    <Fragment>
      <div className={styles.full_conatiner}>
        <div className={styles.left_container}>
          <div className={styles.text_container}>
            <h3 className={styles.h3_tag} onClick={(e) => BackToHome(e)}>
              About Me
            </h3>
            {/* <span className={styles.Pin_Tag}>
              <i className="far fa-circle"></i>
            </span> */}
            <div className={styles.vertical_line}>
              <div className={styles.pos_image}>
                <img
                  src={proimage}
                  className={styles.sideImage}
                  alt="side_image"
                />
              </div>
              {/* <div className={styles.detail_card}>
                <p className={styles.my_description}>
                  I have been working as a freelance web designer & developer
                  since 2015. I support agencies and SMEs in the planning and
                  implementation of modern websites and online shops. Since
                  every project has different requirements, it is always
                  important to me not to fall back on standard solutions, but to
                  develop a suitable concept.
                </p>
              </div>
              <div className={styles.detail_card}>
                <h4 className={styles.h4_tag}>Knowledge & Techinal skills</h4>
                <div className={styles.eventListItem}>
                  <div className={styles.w7}>
                    <span className={styles.skill_set}>css</span>
                    <span className={styles.skill_set}>JavaScript | ES6</span>
                    <span className={styles.skill_set}>HTML 5</span>
                    <span className={styles.skill_set}>Bootstrap</span>
                  </div>
                  <div className={styles.w2}>
                    <span className={styles.skill_set}>React Js</span>
                    <span className={styles.skill_set}>Next Js</span>
                    <span className={styles.skill_set}>Node Js</span>
                    <span className={styles.skill_set}>React Native</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className={styles.right_container}>Sharma</div> */}
      </div>
    </Fragment>
  );
};
export default AboutMe;
