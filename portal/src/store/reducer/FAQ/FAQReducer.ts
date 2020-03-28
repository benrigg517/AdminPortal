import { QuestionAndAnswerInterface } from './interfaces';
import { FAQActions } from './action-types';

export const FAQReducer = (
    state: Array<QuestionAndAnswerInterface> = [
        { question: 'How are you?', answer: 'Good', tableData: { id: 0 } }
    ],
    action: any
): any => {
    switch (action.type) {
        case FAQActions.addFAQ:
            let newData = [
                ...state,
                { question: action.question, answer: action.answer }
            ];
            return newData;
        case FAQActions.removeFAQ:
            let currentState = [...state];
            currentState.splice(currentState.indexOf(action.oldData), 1);
            return currentState;
        case FAQActions.editFAQ:
            let thisState = [...state];
            for (let i = 0; thisState[i]; i++) {
                if (
                    thisState[i].question === action.oldData.question &&
                    thisState[i].answer === action.oldData.answer
                ) {
                    thisState[i].question = action.newData.question;
                    thisState[i].answer = action.newData.answer;
                    continue;
                }
            }
            return thisState;
        default:
            return state;
    }
};
