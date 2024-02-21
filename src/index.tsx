import React from 'react';
import { ConfigProvider } from 'antd';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { history, store } from '@redux/configure-store';
import { routes } from './routes';
import { colors } from '@assets/theme';

import 'normalize.css';
import 'antd/dist/antd.css';
import 'antd/dist/antd.variable.min.css';
import './assets/styles/index.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

ConfigProvider.config({ theme: colors });

root.render(
    <React.StrictMode>
        <ConfigProvider>
            <Provider store={store}>
                <HistoryRouter history={history}>{routes}</HistoryRouter>
            </Provider>
        </ConfigProvider>
    </React.StrictMode>,
);
