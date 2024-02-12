import { FC } from 'react';
import { Card, Layout, Typography } from 'antd';
import styles from './Content.module.scss';
import ActionCards from '@components/layout/MainPageContent/ActionCards.tsx';

const MainPageContent: FC = () => {
    return (
        <Layout.Content className={styles.wrapper}>
            <div className={styles.description}>
                <Card>
                    <p>С CleverFit ты сможешь:</p>
                    <p>
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                        <br />
                        — отслеживать свои достижения в разделе статистики, сравнивая свои
                        результаты с нормами и рекордами;
                        <br /> — создавать свой профиль, где ты можешь загружать свои фото, видео и
                        отзывы о тренировках;
                        <br /> — выполнять расписанные тренировки для разных частей тела, следуя
                        подробным инструкциям и советам профессиональных тренеров.
                    </p>
                </Card>
            </div>

            <div className={styles.heading}>
                <Card bordered={false}>
                    <Typography.Title level={2}>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса.
                        Не откладывай на завтра — начни тренироваться уже сегодня!
                    </Typography.Title>
                </Card>
            </div>

            <ActionCards />
        </Layout.Content>
    );
};

export default MainPageContent;
