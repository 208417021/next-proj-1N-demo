import Link from 'next/link';
// import Layout from '../components/Layout';
import Layout from '../components/Layout2';
import styles from '../styles/404.module.css';

// import { FaExclamationTriangle } from 'react-icons/fa'; // React icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

export default function NotFoundPage() {
  return (
    <Layout title='404 Page Not Found'>
        <div className={styles.error}>
          <h1>
            {/* <FaExclamationTriangle /> */}
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </h1>
          <h4>Sorry, there is nothing here</h4>
          <Link href='/'>Go Back Home</Link>
        </div>
    </Layout>
  );
}