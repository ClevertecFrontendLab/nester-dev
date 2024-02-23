import { Route, Routes } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';
import { AuthProvider } from '@providers/index.ts';
import { AuthPage, AuthResultPage, MainPage } from '@pages/index.ts';
import { AuthLayout } from '@components/index.ts';

export const routes = (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path={Paths.LOGIN} element={<AuthPage />} />
            <Route path={Paths.REGISTRATION} element={<AuthPage />} />
            <Route path={`${Paths.AUTH_RESULT}/:status`} element={<AuthResultPage />} />
        </Route>
        <Route path='/' element={<AuthProvider />}>
            <Route index path={Paths.HOME} element={<MainPage />} />
        </Route>
    </Routes>
);
