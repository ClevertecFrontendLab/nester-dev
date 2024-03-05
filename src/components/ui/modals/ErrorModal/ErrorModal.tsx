import { FC } from 'react';
import { setModal } from '@redux/mainStore.ts';
import { Button, Modal, Result, Row } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { ModalTypes } from '@shared/constants.ts';

const ErrorModal: FC = () => {
    const dispatch = useAppDispatch();

    return (
        <Modal
            centered
            open
            maskClosable
            onCancel={() => dispatch(setModal(null))}
            maskStyle={{
                backdropFilter: 'blur(12px)',
                background: 'rgba(121, 156, 212, 0.1)',
            }}
            footer={null}
        >
            <Result
                style={{ padding: '40px 0 32px 0' }}
                status='error'
                title='Данные не сохранились'
                subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                extra={[
                    <Row wrap={false}>
                        <Button
                            data-test-id='write-review-not-saved-modal'
                            type='primary'
                            size='large'
                            block
                            onClick={() => dispatch(setModal(ModalTypes.FEEDBACK))}
                        >
                            Написать отзыв
                        </Button>
                        <Button
                            block
                            onClick={() => dispatch(setModal(null))}
                            size='large'
                            style={{ marginLeft: 8 }}
                        >
                            Закрыть
                        </Button>
                    </Row>,
                ]}
            />
        </Modal>
    );
};

export default ErrorModal;
