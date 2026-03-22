import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from '@clerk/nextjs'
import Button from "@/components/ui/Button";
import { ClerkProvider, Show, SignInButton, UserButton } from '@clerk/nextjs'
// import { AppProps } from 'next/app'

export default async function DashboardPage() {
  const user = await currentUser();

  return (

   <div className="w-full h-screen bg-white"> 

     <header style={{ display: 'flex', justifyContent: 'space-between', padding: 20 }}>
      <h1>My App</h1>
      <Show when="signed-in">
        <UserButton />
      </Show>
      <Show when="signed-out">
        <SignInButton />
      </Show>
    </header>
    
    <div className="flex min-h-screen items-center justify-center ">



      <h1 className="text-2xl font-bold mx-10">
        Welcome back, {user?.firstName} 👋
      </h1>
    </div>
   </div>
  );
}