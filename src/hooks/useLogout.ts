import { Paths } from '@shared/constants.ts';
import { setToken } from '@redux/mainStore.ts';
import { removeFromStorage } from '@redux/api/helpers/helper.ts';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks.ts';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return () => {
        navigate(Paths.LOGIN, { replace: true });
        dispatch(setToken(''));
        removeFromStorage();
    };
};
