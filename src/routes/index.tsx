import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/main-page';
import { Paths } from '@shared/constants.ts';
import { AuthProvider } from '@providers/index.ts';

export const routes = (
    <Routes>
        <Route path='/' element={<AuthProvider />}>
            <Route index path={Paths.HOME} element={<MainPage />} />
        </Route>
    </Routes>
);
