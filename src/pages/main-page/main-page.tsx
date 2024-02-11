import { Layout } from 'antd';
import { Aside } from '@components/index.ts';

const { Header, Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <Layout>
            <Aside />
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
            </Layout>
        </Layout>
    );
};
