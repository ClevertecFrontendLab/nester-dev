import { FC } from 'react';
import { Button } from 'antd';

import styles from './NoFeedbacksPlaceholder.module.scss';

const NoFeedbacksPlaceholder: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.placeholder}>
                <div className={styles.info}>
                    <h2 className={styles.title}>Оставьте свой отзыв первым</h2>
                    <p className={styles.description}>
                        Вы можете быть первым, кто оставит отзыв об этом фитнес приложении.
                        Поделитесь своим мнением и опытом с другими пользователями, и помогите им
                        сделать правильный выбор.
                    </p>
                </div>
            </div>

            <Button type='primary' size='large' block={false}>
                Написать отзыв
            </Button>
        </div>
    );
};

export default NoFeedbacksPlaceholder;
