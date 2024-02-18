import { FC } from 'react';
import { Button, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import styles from './AuthForm.module.scss';

const { useBreakpoint } = Grid;

const AuthButtons: FC = () => {
    const { sm } = useBreakpoint();

    return (
        <div className={styles.buttons}>
            <Button type='primary'>Войти</Button>
            <Button icon={sm && <GooglePlusOutlined />}>Войти через Google</Button>
        </div>
    );
};

export default AuthButtons;
