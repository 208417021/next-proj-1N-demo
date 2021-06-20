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
                            <h3>Card One</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>02</h2>
                                <h3>Card Two</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>03</h2>
                                <h3>Card Three</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                </div>

                <div className={styles.card}>
                        <div className={styles.box}>
                            <div className={styles.content}>
                                <h2>04</h2>
                                <h3>Card Four</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                </div>

            </div>
        </Layout>
    )
}
