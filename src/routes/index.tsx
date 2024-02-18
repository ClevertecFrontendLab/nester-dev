import { Route, Routes } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { AuthProvider } from '@providers/index.ts';
import { Login, MainPage } from '@pages/index.ts';

export const routes = (
    <Routes>
        <Route path={Paths.LOGIN} element={<Login />} />
        <Route path='/' element={<AuthProvider />}>
            <Route index path={Paths.HOME} element={<MainPage />} />
        </Route>
    </Routes>
);
