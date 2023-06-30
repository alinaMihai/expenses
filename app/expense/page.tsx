"use client";
import { Expense } from "@prisma/client"
import { createExpense, getExpenses } from "./actions";
import { useAuth } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default async function ExpensesPage({ }) {
  const { userId } = useAuth();
  const [expenses, setExpenses] = useState([] as Array<Expense>);

  if (!userId) return null;

  async function fetchAllExpenses() {

    if (!userId) return;
    setExpenses(await getExpenses(userId));
  }

  useEffect(() => {
    fetchAllExpenses();
  }, [])


  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
      {expenses.map((expense: Expense) => <p key={expense.id}>{expense.name} | {expense.value}</p>)}
      <button style={{
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: '20px'
      }} onClick={async () => {

        await createExpense({
          name: 'Emag',
          value: 500,
          categoryId: 'c4e1cc99-cd7b-4668-b5c1-1723ac496368',
        }, userId)

        fetchAllExpenses()
      }}>Create new expense</button>
    </div >
  )
}