import React from "react";
import Table from "../../Components/Table/index.js";
import { QuestionAndAnswerInterface } from "../../store/reducer/FAQ/interfaces.js";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../../store/interfaces.js";
import { SetFAQ, DeleteFAQ, EditFAQ } from "../../store/reducer/FAQ/actions";

const table = {
    columns: [
        { title: "Question", field: "question", type: "string" },
        { title: "Answer", field: "answer", type: "string" }
    ]
};

const FAQPage = () => {
    const dispatch = useDispatch();
    const FAQ: Array<QuestionAndAnswerInterface> = useSelector(
        (state: State) => state.FAQ
    );

    const addQuestion = (newData: QuestionAndAnswerInterface) => {
        dispatch(SetFAQ(newData.question, newData.answer));
    };

    const deleteQuestion = (oldData: QuestionAndAnswerInterface) => {
        dispatch(DeleteFAQ(oldData));
    };

    const editQuestion = (
        newData: QuestionAndAnswerInterface,
        oldData: QuestionAndAnswerInterface
    ) => {
        dispatch(EditFAQ(oldData, newData));
    };

    return (
        <Table
            columns={table.columns}
            data={FAQ}
            onAdd={addQuestion}
            onDelete={deleteQuestion}
            onEdit={editQuestion}
        />
    );
};

export default FAQPage;
