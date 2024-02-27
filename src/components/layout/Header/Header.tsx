import { FC } from 'react';
import { Button, Grid, Layout, Row, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import styles from './Header.module.scss';

const { useBreakpoint } = Grid;

const Header: FC = () => {
    const { xs, sm, lg } = useBreakpoint();

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
                        type={!xs ? 'text' : 'default'}
                        icon={(lg || xs) && <SettingOutlined />}
                        shape={xs ? 'circle' : undefined}
                    >
                        {sm && 'Настройки'}
                    </Button>
                </Row>
            </Layout.Header>
        </div>
    );
};

export default Header;
