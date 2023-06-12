
import styles from "../../styles/css/register_login/reg_log.module.css";
import logo from "../../assets/logo.png";
import "../../styles/css/home/index.css"

function Logo() {
    return (
    <>
        <div className={styles.imagecontainer}>
            <img src={logo} alt="logo" />
        </div>

    </>);
}

export default Logo; 
   