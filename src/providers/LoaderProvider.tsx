import { FC, PropsWithChildren } from 'react';
import { Loader } from '@components/index.ts';
import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';

const LoaderProvider: FC<PropsWithChildren> = ({ children }) => {
    const { showLoader } = useAppSelector((state) => state.mainState);

    return (
        <>
            {showLoader && <Loader />}
            {children}
        </>
    );
};

export default LoaderProvider;
