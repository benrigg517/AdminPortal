import { QuestionAndAnswerInterface } from "./reducer/FAQ/interfaces";
import { AppInterface } from "./reducer/App/interfaces";

export interface State {
    App: AppInterface;
    FAQ: Array<QuestionAndAnswerInterface>;
}
