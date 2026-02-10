export type Plan = {
    id: string;
    name: string;
    price: number;
    period: string;
    description: string;
    buttonText: string;
    popular: boolean;
    icon: string;
    features: [string];
    limitations: [string];
};
