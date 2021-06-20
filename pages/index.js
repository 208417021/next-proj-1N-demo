import Layout from '../components/Layout2';
import Head from 'next/head';
import styles from '../styles/Index.module.css';

export default function index() {
    return (
        <Layout title="Home">
            <div className={styles.container}>

                <div className={styles.card}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h2>01</h2>
                            <h3>MealDB</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="/project/meals">Link</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>02</h2>
                                <h3>Shop</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/project/shop">Link</a>
                            </div>
                        </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>03</h2>
                                <h3>ChangeLog</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="/project/process">Link</a>
                            </div>
                        </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>04</h2>
                                <h3>Strapi</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="https://strapi-demo-208417021.herokuapp.com/">Link</a>
                            </div>
                        </div>
                </div>

            </div>
        </Layout>
    )
}
