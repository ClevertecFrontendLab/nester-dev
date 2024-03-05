import { FC, useState } from 'react';
import { Button, Grid, Modal, Rate } from 'antd';
import { useAppDispatch, useMainStateSelector } from '@hooks/typed-react-redux-hooks.ts';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { setModal } from '@redux/mainStore.ts';
import { useLeaveFeedback } from '@hooks/useLeaveFeedback.tsx';

const { useBreakpoint } = Grid;

const FeedbackModal: FC = () => {
    const { rating, feedback } = useMainStateSelector();
    const [stars, setStars] = useState(rating);
    const [text, setText] = useState(feedback);
    const { xs } = useBreakpoint();
    const dispatch = useAppDispatch();
    const { mutate } = useLeaveFeedback();

    return (
        <Modal
            title='Ваш отзыв'
            centered
            open
            maskClosable
            onCancel={() => dispatch(setModal(null))}
            maskStyle={{ backdropFilter: 'blur(12px)', background: 'rgba(121, 156, 212, 0.1)' }}
            footer={[
                <Button
                    type='primary'
                    disabled={!stars}
                    block={xs}
                    size='large'
                    onClick={() => mutate({ rating: stars, message: text })}
                    data-test-id='new-review-submit-button'
                >
                    Опубликовать
                </Button>,
            ]}
        >
            <Rate
                style={{ marginBottom: 16 }}
                value={stars}
                onChange={setStars}
                character={({ index }) => {
                    if (Number(index) < stars) {
                        return (
                            <StarFilled
                                key={index}
                                style={{ color: 'var(--character-light-warning)' }}
                            />
                        );
                    }
                    return (
                        <StarOutlined
                            key={index}
                            style={{ color: 'var(--character-light-warning)' }}
                        />
                    );
                }}
            />

            <TextArea size='small' value={text} onChange={(e) => setText(e.target.value)} />
        </Modal>
    );
};

export default FeedbackModal;
