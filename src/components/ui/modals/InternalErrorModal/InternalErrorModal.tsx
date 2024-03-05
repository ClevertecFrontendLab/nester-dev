import { FC } from 'react';
import { setModal } from '@redux/mainStore.ts';
import { Button, Modal, Result } from 'antd';
import { Paths } from '@shared/constants.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { useNavigate } from 'react-router-dom';

const InternalErrorModal: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                status='500'
                title='Что-то пошло не так'
                subTitle='Произошла ошибка, попробуйте ещё раз.'
                extra={
                    <Button
                        size='large'
                        type='primary'
                        onClick={() => {
                            dispatch(setModal(null));
                            navigate(Paths.HOME, { replace: true });
                        }}
                    >
                        Назад
                    </Button>
                }
            />
        </Modal>
    );
};

export default InternalErrorModal;
