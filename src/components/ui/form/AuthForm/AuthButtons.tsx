import { FC } from 'react';
import { Button, Grid } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

import styles from './AuthForm.module.scss';

const { useBreakpoint } = Grid;

interface Props {
    hasErrors: boolean;
}

const AuthButtons: FC<Props> = ({ hasErrors }) => {
    const { sm } = useBreakpoint();
    const { pathname } = useLocation();

    const buttonText = pathname === Paths.LOGIN ? 'Войти' : 'Регистрация';

    return (
        <div className={styles.buttons}>
            <Button type='primary' htmlType='submit' disabled={hasErrors}>
                Войти
            </Button>
            <Button icon={sm && <GooglePlusOutlined />}>{buttonText} через Google</Button>
        </div>
    );
};

export default AuthButtons;
