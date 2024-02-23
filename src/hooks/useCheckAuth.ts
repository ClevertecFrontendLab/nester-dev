import { useAppSelector } from '@hooks/typed-react-redux-hooks.ts';
import { getAccessToken } from '@redux/api/helper.ts';

export const useCheckAuth = () => {
    const { token } = useAppSelector((state) => state.mainState);
    const localStorageToken = getAccessToken();

    return !!(token || localStorageToken);
};
