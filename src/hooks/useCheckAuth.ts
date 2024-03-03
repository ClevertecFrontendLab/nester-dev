import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks.ts';
import { getAccessToken } from '@redux/api/helpers/helper.ts';
import { setToken } from '@redux/mainStore.ts';

export const useCheckAuth = () => {
    const { token } = useAppSelector((state) => state.mainState);
    const localStorageToken = getAccessToken();
    const dispatch = useAppDispatch();

    if (localStorageToken) {
        dispatch(setToken(token || localStorageToken || ''));
    }

    return !!(token || localStorageToken);
};
