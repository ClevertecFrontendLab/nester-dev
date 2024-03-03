import { useGetFeedbacksQuery } from '@redux/api/feedback.api.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { useEffect } from 'react';
import { setModal } from '@redux/mainStore.ts';
import { Button, Modal, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Paths } from '@shared/constants.ts';

export const useGetFeedbacks = () => {
    const dispatch = useAppDispatch();
    const { data, isError } = useGetFeedbacksQuery();
    const navigate = useNavigate();

    useEffect(() => {
        if (isError) {
            dispatch(
                setModal(
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
                            size='large'
                            extra={
                                <Button
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
                    </Modal>,
                ),
            );
        }
    }, [isError, dispatch]);

    return { data };
};
