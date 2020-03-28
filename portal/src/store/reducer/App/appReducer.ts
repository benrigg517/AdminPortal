import { AppInterface } from "./interfaces";
import { AppActions } from "./action-types";

export const appReducer = (
    state: AppInterface = {
        LoggedIn: false,
        Loading: true
    },
    action: { type: string, data: AppInterface }
): AppInterface => {
    switch (action.type) {
        case AppActions.login:
            const loggedInState: AppInterface = { LoggedIn: action.data.LoggedIn, Loading: state.Loading };
            return loggedInState;
        case AppActions.SetLoading:
            const loadedState: AppInterface = { LoggedIn: state.LoggedIn, Loading: action.data.Loading };
            return loadedState;
        default:
            return state;
    }
};
