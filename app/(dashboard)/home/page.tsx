import { UserButton } from "@clerk/nextjs";

export default async function Page() {
  return (
    <div>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
}