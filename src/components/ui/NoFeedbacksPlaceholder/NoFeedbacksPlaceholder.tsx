import { FC } from 'react';
import { Button } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setModal } from '@redux/mainStore.ts';

import styles from './NoFeedbacksPlaceholder.module.scss';
import { ModalTypes } from '@shared/constants.ts';

const NoFeedbacksPlaceholder: FC = () => {
    const dispatch = useAppDispatch();
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

            <Button
                onClick={() => dispatch(setModal(ModalTypes.FEEDBACK))}
                data-test-id='write-review'
                type='primary'
                size='large'
                block={false}
            >
                Написать отзыв
            </Button>
        </div>
    );
};

export default NoFeedbacksPlaceholder;
