enum RECURRENCE_INTERVAL  {
    MONTHLY,
    YEARLY
}

type RecurrenceInterval = keyof typeof RECURRENCE_INTERVAL;

export type Expense = {
    name: string;
    notes?: string;
    value: number;
    isRecurring?: boolean;
    recurrenceInterval?: RecurrenceInterval
    categoryId: string
}