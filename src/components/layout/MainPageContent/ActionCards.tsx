import { FC } from 'react';
import { Card, Row, Space } from 'antd';
import { cards } from '@components/layout/MainPageContent/cards.config.tsx';

import styles from './MainPageContent.module.scss';

const ActionCards: FC = () => (
    <div className={styles.cards}>
        {cards.map(({ title, icon, description }) => (
            <div key={title} className={styles.action_card}>
                <Card title={title} bordered={false}>
                    <Row align='middle' justify='center'>
                        <Space size='small'>
                            {icon} {description}
                        </Space>
                    </Row>
                </Card>
            </div>
        ))}
    </div>
);

export default ActionCards;
