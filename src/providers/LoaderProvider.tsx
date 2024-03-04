import { FC, PropsWithChildren } from 'react';
import { Loader } from '@components/index.ts';
import { useMainStateSelector } from '@hooks/typed-react-redux-hooks.ts';

const LoaderProvider: FC<PropsWithChildren> = ({ children }) => {
    const { showLoader } = useMainStateSelector();

    return (
        <>
            {showLoader && <Loader />}
            {children}
        </>
    );
};

export default LoaderProvider;
