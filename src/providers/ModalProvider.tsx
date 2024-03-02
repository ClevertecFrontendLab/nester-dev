import { FC } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';

const ModalProvider: FC = () => {
    const { modal } = useAppSelector((state) => state.mainState);

    if (!modal) {
        return null;
    }

    return modal;
};

export default ModalProvider;
