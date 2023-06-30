import { db } from "@/lib/db"
import { auth } from '@clerk/nextjs';
import { Budget } from "@prisma/client";

const getBudgetById = async (id: string) => {
  const { userId } = auth();

  if (!userId) return null;

  const budget = await db.budget.findFirst({
    where: {
      id,
      ownerId: userId
    },
  })

  return budget
}

export default async function BudgetPage({ params }) {
  const budget: Budget | null = await getBudgetById(params.id)

  return (
    <div className="h-full overflow-y-auto pr-6 w-1/1">
     {budget?.name} | {budget?.value}
    </div>
  )
}