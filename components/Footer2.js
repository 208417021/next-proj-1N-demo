import styles from '../styles/Footer2.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitterSquare, faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import {faMailBulk} from "@fortawesome/free-solid-svg-icons";

export default function Footer2() {
    return (
        <div>
            <footer className={styles["footer-distributed"]}>

                <div className={styles["footer-right"]}>

                    <a href="/404"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a>
                    <a href="/404"><FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon></a>
                    <a href="https://github.com/208417021/next-proj-1N-demo"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
                    <a href="mailto://208417021@o365.tku.edu.tw"><FontAwesomeIcon icon={faMailBulk}></FontAwesomeIcon></a>

                </div>

                <div className={styles["footer-left"]}>

                    <p className={styles["footer-links"]}>
                        <a className={styles["link-1"]} href="#">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p>Company Name &copy; 2015</p>
                </div>

            </footer>
        </div>
    )
}
