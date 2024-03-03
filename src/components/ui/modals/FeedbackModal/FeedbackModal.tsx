import { FC, useState } from 'react';
import { Button, Grid, Modal, Rate } from 'antd';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { StarFilled, StarOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { setModal } from '@redux/mainStore.ts';

const { useBreakpoint } = Grid;

const FeedbackModal: FC = () => {
    const [stars, setStars] = useState(0);
    const [feedback, setFeedback] = useState('');
    const { xs } = useBreakpoint();
    const dispatch = useAppDispatch();

    return (
        <Modal
            title='Ваш отзыв'
            centered
            open
            maskClosable
            onCancel={() => dispatch(setModal(null))}
            maskStyle={{ backdropFilter: 'blur(12px)', background: 'rgba(121, 156, 212, 0.1)' }}
            footer={[
                <Button type='primary' disabled={!stars && !feedback} block={xs} size='large'>
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

            <TextArea size='small' value={feedback} onChange={(e) => setFeedback(e.target.value)} />
        </Modal>
    );
};

export default FeedbackModal;
