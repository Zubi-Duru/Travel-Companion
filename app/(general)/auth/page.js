"use client";
import { useAuthContext } from "@/app/components/hooks/useAuthContext";
import AuthCard from "@/app/components/auth/AuthCard";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Auth({ searchParams }) {
  const router = useRouter();
  const { user,token, dispatch } = useAuthContext();


  useEffect(()=>{
    if(user && !user.travelDate){
      router.push(`/profile-setup?userId=${user._id}`)
    }
    if(user && user.travelDate){
      router.push("/dashboard")
    }
  },[user])
  return (
    <>
      {!user && (
        <main className="md:bg-bgImg bg-cover bg-no-repeat h-[calc(100vh-64px)] w-full text-sm">
          <section className="h-full w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto flex justify-center md:items-center">
            <AuthCard type={searchParams.type} />
          </section>
        </main>
      )}
    </>
  );
}
