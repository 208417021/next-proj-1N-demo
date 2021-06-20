import Head from 'next/head';
import Header from './Nav2';
import Footer from './Footer2';
import styles from '../styles/Layout.module.css';

export default function Layout2({ title, description, keywords, children }) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <Header />
            <div className={styles.container}>{children}</div>
            <Footer />
        </div>
    )
}
