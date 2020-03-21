import { AppActions } from "./action-types";

export function Login (loginState: boolean) {
    return {
        type: AppActions.login,
        payload: loginState
    };
}
