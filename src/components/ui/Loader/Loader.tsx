import { FC } from 'react';
import Lottie from 'lottie-react';
import loader from './loader.json';

import styles from './Loader.module.scss';

const Loader: FC = () => {
    return (
        <div className={styles.wrapper}>
            <Lottie animationData={loader} className={styles.loader} data-test-id='loader' />
        </div>
    );
};

export default Loader;
