import { FC } from 'react';
import { Button, Card, Layout, Row } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

import cardStyles from '../MainPageContent/MainPageContent.module.scss';
import styles from './Footer.module.scss';

const Footer: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.footer}>
            <Layout.Footer>
                <Button
                    data-test-id='see-reviews'
                    type='link'
                    className={styles.reviews}
                    onClick={() => navigate(Paths.FEEDBACKS)}
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
