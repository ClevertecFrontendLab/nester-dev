import { FC } from 'react';
import { Button, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import styles from './LoginForm.module.scss';

const { useBreakpoint } = Grid;

const LoginButtons: FC = () => {
    const { sm } = useBreakpoint();

    return (
        <div className={styles.buttons}>
            <Button type='primary'>Войти</Button>
            <Button icon={sm && <GooglePlusOutlined />}>Войти через Google</Button>
        </div>
    );
};

export default LoginButtons;
