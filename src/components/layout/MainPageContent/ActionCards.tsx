import { FC } from 'react';
import styles from './Content.module.scss';
import { cards } from '@components/layout/MainPageContent/cards.config.tsx';
import { Card, Row, Space } from 'antd';

const ActionCards: FC = () => {
    return (
        <div className={styles.cards}>
            {cards.map(({ title, icon, description }) => (
                <Card key={title} title={title} bordered={false}>
                    <Row align='middle' justify='center'>
                        <Space size='small'>
                            {icon} {description}
                        </Space>
                    </Row>
                </Card>
            ))}
        </div>
    );
};

export default ActionCards;
