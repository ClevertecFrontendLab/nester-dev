import { useLeaveFeedbackMutation } from '@redux/api/feedback.api.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { setFeedback, setModal, setRating } from '@redux/mainStore.ts';
import { Button, Modal, Result, Row } from 'antd';
import { FeedbackModal } from '@components/index.ts';

export const useLeaveFeedback = () => {
    const [mutate, { isSuccess, isError, originalArgs }] = useLeaveFeedbackMutation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isSuccess) {
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
                    </Modal>,
                ),
            );
        }

        if (isError) {
            const handleCLose = () => {
                dispatch(setRating(originalArgs?.rating || 0));
                dispatch(setFeedback(originalArgs?.message || ''));
                dispatch(setModal(null));
            };

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
                            status='error'
                            title='Данные не сохранились'
                            subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                            extra={[
                                <Row wrap={false}>
                                    <Button
                                        type='primary'
                                        size='large'
                                        block
                                        onClick={() => dispatch(setModal(<FeedbackModal />))}
                                    >
                                        Написать отзыв
                                    </Button>
                                    <Button
                                        block
                                        onClick={handleCLose}
                                        size='large'
                                        style={{ marginLeft: 8 }}
                                    >
                                        Закрыть
                                    </Button>
                                </Row>,
                            ]}
                        />
                    </Modal>,
                ),
            );
        }
    }, [isSuccess, isError]);

    return { mutate };
};
