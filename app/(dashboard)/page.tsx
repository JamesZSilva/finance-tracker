"use client";
import { accounts } from "@/db/schema";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import { UserButton } from "@clerk/nextjs"
export default function Home() {
  const accountsQuery = useGetAccounts();
  return (
    <div>
      {accountsQuery.data?.map((account) => (
        <div key={account.id}>
        </div>

      ))}
    </div>
  )
}
