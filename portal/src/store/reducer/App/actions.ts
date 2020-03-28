import { AppActions } from "./action-types";
import { AppInterface } from "./interfaces";

export function Login(loginState: boolean) {
    const data: AppInterface = {
        LoggedIn: loginState,
        Loading: false

    }
    return {
        type: AppActions.login,
        data: data
    };
}

export function changeLoading(loading: boolean) {
    const data: AppInterface = {
        LoggedIn: true,
        Loading: loading

    }
    return {
        type: AppActions.SetLoading,
        data: data
    };
}