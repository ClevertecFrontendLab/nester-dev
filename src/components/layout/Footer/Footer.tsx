import { FC, useEffect, useState } from 'react';
import { Button, Card, Layout, Modal, Result, Row } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import cardStyles from '../MainPageContent/MainPageContent.module.scss';

import styles from './Footer.module.scss';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { useGetFeedbacksQuery } from '@redux/api/feedback.api.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setModal } from '@redux/mainStore.ts';

const Footer: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [isViewFeedbacks, setIsViewFeedbacks] = useState(false);
    const { isError, isSuccess } = useGetFeedbacksQuery(undefined, { skip: !isViewFeedbacks });

    useEffect(() => {
        if (isSuccess) {
            navigate(Paths.FEEDBACKS);
        }

        if (isError) {
            dispatch(
                setModal(
                    <Modal
                        centered
                        open
                        maskClosable
                        onCancel={() => dispatch(setModal(null))}
                        maskStyle={{
                            backdropFilter: 'blur(12px)',
                            background: 'rgba(121, 156, 212, 0.1)',
                        }}
                        footer={null}
                    >
                        <Result
                            status='500'
                            title='Что-то пошло не так'
                            subTitle='Произошла ошибка, попробуйте ещё раз.'
                            extra={
                                <Button type='primary' onClick={() => dispatch(setModal(null))}>
                                    Назад
                                </Button>
                            }
                        />
                    </Modal>,
                ),
            );
        }
    }, [isSuccess, isError, dispatch, navigate]);

    return (
        <div className={styles.footer}>
            <Layout.Footer>
                <Button
                    type='link'
                    className={styles.reviews}
                    onClick={() => setIsViewFeedbacks(true)}
                >
                    Смотреть отзывы
                </Button>

                <div className={cardStyles.action_card}>
                    <Card
                        title={
                            <div className={styles.wrapper}>
                                <p className={styles.title}>Скачать на телефон </p>
                                <p className={styles.subtitle}>Доступно в PRO-тарифе</p>
                            </div>
                        }
                    >
                        <Row align='middle' wrap={false}>
                            <Button
                                icon={<AndroidFilled />}
                                style={{ padding: '0 11px' }}
                                type='text'
                            >
                                Android OS
                            </Button>
                            <Button icon={<AppleFilled />} type='text'>
                                Apple iOS
                            </Button>
                        </Row>
                    </Card>
                </div>
            </Layout.Footer>
        </div>
    );
};
export default Footer;
