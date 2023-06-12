

import styles from "../../styles/css/register_login/reg_log.module.css";

import googleIcan from "../../assets/icons/google-icon.png";
import fbIcon from "../../assets/icons/facebook.png";

function SocialLinks() {
    return (<>
        <div className={styles.connectwith}>
            <div className={styles.hrWrapper}>
                <hr />
                <span>Or Continue with</span>
                <hr />
            </div>
        </div>
        <div className={styles.otheroptions}>
            <img src={googleIcan} alt="google logo" />
            <img src={fbIcon} alt="facebook logo" />
        </div>

    </>);
}

export default SocialLinks;