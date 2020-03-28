import { FAQActions } from './action-types';
import { QuestionAndAnswerInterface } from './interfaces';

export function SetFAQ (question: string, answer: string) {
    return {
        type: FAQActions.addFAQ,
        question: question,
        answer: answer
    };
}

export function DeleteFAQ (oldData: QuestionAndAnswerInterface) {
    return {
        type: FAQActions.removeFAQ,
        oldData: oldData
    };
}

export function EditFAQ (
    oldData: QuestionAndAnswerInterface,
    newData: QuestionAndAnswerInterface
) {
    return {
        type: FAQActions.editFAQ,
        oldData: oldData,
        newData: newData
    };
}
