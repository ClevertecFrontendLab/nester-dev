import { FC, useEffect } from 'react';
import { Footer, Header, MainPageContent } from '@components/index.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setShowLoader } from '@redux/mainStore.ts';

export const MainPage: FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setShowLoader(false));
    }, []);

    return (
        <>
            <Header />
            <MainPageContent />
            <Footer />
        </>
    );
};
export default MainPage;
