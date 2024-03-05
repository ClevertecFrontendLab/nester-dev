import { useMainStateSelector } from '@hooks/typed-react-redux-hooks.ts';
import { getAccessToken } from '@redux/api/helpers/helper.ts';

export const useCheckAuth = () => {
    const { token } = useMainStateSelector();
    const localStorageToken = getAccessToken();

    return !!(token || localStorageToken);
};
