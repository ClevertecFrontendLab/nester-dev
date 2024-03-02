import { FC } from 'react';
import { Rate } from 'antd';
import styles from './FeedbackCard.module.scss';
import { StarOutlined } from '@ant-design/icons';

const FeedbackInfo: FC = () => {
    return (
        <div className={styles.info}>
            <div>
                <Rate character={<StarOutlined />} />
                <span className={styles.date}>17.10.2023</span>
            </div>

            <p className={styles.text}>
                Я очень довольна этим приложением! Оно помогает мне следить за своим здоровьем и
                физической формой, предлагая разнообразные упражнения и питание. Я люблю, что
                приложение адаптируется к моему уровню и целям, и дает мне полезные советы и
                обратную связь. Я рекомендую это приложение всем, кто хочет улучшить свою жизнь!
            </p>
        </div>
    );
};

export default FeedbackInfo;
