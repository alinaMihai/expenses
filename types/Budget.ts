enum CURRENCY {
    RON,
    EURO,
    DOLLAR,
}

type CurrencyString = keyof typeof CURRENCY;

export type Budget = {
    name: string;
    description?: string;
    currency?: CurrencyString;
    value: number
}