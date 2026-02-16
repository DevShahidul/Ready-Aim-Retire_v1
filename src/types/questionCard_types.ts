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
