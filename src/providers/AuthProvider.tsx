import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const AuthProvider: FC = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default AuthProvider;
