export type QuestionCard = {
    id: string;
    tag?: string;
    title: string;
    subtitle?: string;
    checkList: {
        title: string;
        items: string[];
    };
    bottomText?: string;
};

export type ColumnCard = {
    id: string;
    title: string;
    subtitle?: string;
    dotList?: {
        title?: string;
        items?: string[];
    };
    btnText?: string;
    bottomText?: string;
    email?: string;
};
