import { FC } from 'react';
import { useMainStateSelector } from '@hooks/typed-react-redux-hooks.ts';
import { ModalTypes } from '@shared/constants.ts';
import { ErrorModal, FeedbackModal, SuccessModal } from '@components/index.ts';
import InternalErrorModal from '@components/ui/modals/InternalErrorModal/InternalErrorModal.tsx';

const ModalProvider: FC = () => {
    const { modal } = useMainStateSelector();

    if (!modal) {
        return null;
    }

    return (
        <>
            {
                {
                    [ModalTypes.SUCCESS]: <SuccessModal />,
                    [ModalTypes.ERROR]: <ErrorModal />,
                    [ModalTypes.FEEDBACK]: <FeedbackModal />,
                    [ModalTypes.INTERNAL_ERROR]: <InternalErrorModal />,
                }[modal]
            }
        </>
    );
};

export default ModalProvider;
