import { FC } from 'react';
import { Button, Layout, Row, Typography } from 'antd';
import styles from './Header.module.scss';
import { SettingOutlined } from '@ant-design/icons';
import useMediaQuery from '@hooks/useMediaQuery.ts';

const Header: FC = () => {
    const isLargerMd = useMediaQuery('(min-width: 992px)');
    const isLessXs = useMediaQuery('(max-width: 480px)');

    return (
        <div className={styles.header}>
            <Layout.Header>
                <Typography.Text className={styles.header_breadcrumb}>Главная</Typography.Text>
                <Row wrap={false}>
                    <Typography.Title level={1}>
                        Приветствуем тебя в CleverFit — приложении,
                        <br /> которое поможет тебе добиться своей мечты!
                    </Typography.Title>

                    <Button
                        type={!isLessXs ? 'text' : 'default'}
                        icon={(isLargerMd || isLessXs) && <SettingOutlined />}
                        shape={isLessXs && 'circle'}
                    >
                        {!isLessXs && 'Настройки'}
                    </Button>
                </Row>
            </Layout.Header>
        </div>
    );
};

export default Header;
