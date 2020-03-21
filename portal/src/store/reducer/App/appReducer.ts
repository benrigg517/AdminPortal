import { AppInterface } from "./interfaces";
import { AppActions } from "./action-types";

export const appReducer = (
    state: AppInterface = {
        LoggedIn: false
    },
    action: any
): AppInterface => {
    switch (action.type) {
        case AppActions.login:
            const loggedInState: AppInterface = { LoggedIn: action.payload };
            return loggedInState;
        default:
            return state;
    }
};
