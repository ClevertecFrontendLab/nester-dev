import { FC } from 'react';
import { setModal } from '@redux/mainStore.ts';
import { Button, Modal, Result } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';

const SuccessModal: FC = () => {
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
                status='success'
                title='Отзыв успешно опубликован'
                extra={[
                    <Button
                        type='primary'
                        size='large'
                        block
                        onClick={() => dispatch(setModal(null))}
                    >
                        Отлично
                    </Button>,
                ]}
            />
        </Modal>
    );
};

export default SuccessModal;
