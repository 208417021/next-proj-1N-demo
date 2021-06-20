import Layout from '../../components/Layout2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/Shop.module.css';

export default function shop() {
    return (
        <Layout title="shop project" description="my shop">
            <div className={styles.container}>
                {/* Card one */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173406/1_49a57489bf.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Rayon a-line Dress</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={`${styles.fa} ${styles.grey}`} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Card two */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173406/2_11a4392dfe.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Analog Black Men Watch</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card three */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173406/3_342e52285e.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Men's Regular Fit Shirts</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card four */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173405/4_8d574e0953.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Women's Handbag</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card five */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173406/5_c8b4791a45.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Women's Relaxed Fit Jeans</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card six */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173406/6_a3b16820f1.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Round Neck Printed Top</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card seven */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173408/7_ab1cb8a311.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Men's Running Shoe</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card eight */}
                <div className={styles.card}>
                    <div className={styles.imgBx}>
                        <img src="https://res.cloudinary.com/tku-edu-tw/image/upload/v1624173408/8_7fb5850528.jpg" alt="" />
                        <ul className={styles.action}>
                            <li>
                                <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                                <span>Add to wish list</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                                <span>Add to cart</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                                <span>See details</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles["card-content"]}>
                        <div className={styles.productName}>
                            <h3>Men Pullover Sweater</h3>
                        </div>
                        <div className={styles["price-rating"]}>
                            <h2>$13.45</h2>
                            <div className={styles.rating}>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon className={styles.fa} icon={faStar}></FontAwesomeIcon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
