import { UserButton } from "@clerk/nextjs";
// import { delay } from "@/lib/async";
import Greeting from "@/components/Greeting";
import GreetingsSkeleton from "@/components/GreetingsSkeleton";
import NewProject from "@/components/NewProject";
import ProjectCard from "@/components/ProjectCard";
import TaskCard from "@/components/TaskCard";
import { delay } from "@/lib/async";
import { getUserFromCookie } from "@/lib/auth";
import { db } from "@/lib/db";
import { cookies } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const getData = async () => {
  await delay(2000)
  const user = await getUserFromCookie(cookies())

  const projects = await db.project.findMany({
    where: {
      ownerId: user?.id,
    },
    include: {
      tasks: true
    }
  })

  return {projects}
}

export default async function Page() {
  const {projects} = await getData()

  return (
    <div>
        <UserButton afterSignOutUrl="/"/>
    </div>
  );
}