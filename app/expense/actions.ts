'use server'
import { db } from "@/lib/db";
import { Expense } from "../../types/Expense";

export const createExpense = async (params: Expense, userId: string) => {
  if (!userId) {
    console.error("Please log in first!");
    return null;
  }

  try {
    const { categoryId, name, notes, value, isRecurring, recurrenceInterval } =
      params;

    // TODO create category in separate function
    // const category = await db.category.create({
    //   data: {
    //     name: "groceries",
    //     ownerId: userId,
    //   },
    // });

    // console.log({ category });

    await db.expense.create({
      data: {
        categoryId,
        name,
        notes,
        value,
        isRecurring,
        recurrenceInterval,
        ownerId: userId,
      },
    });

    console.log("created expense");
  } catch (ex) {
    console.error("could not create expense!", ex);
  }
};

export const getExpenses = async (userId: string) => {
  if (!userId) return [];

  const expenses = await db.expense.findMany({
    where: {
      ownerId: userId,
    },
  });

  return expenses;
};
