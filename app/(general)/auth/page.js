import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import AuthCard from "@/app/components/AuthCard";

export default function Signup() {
  return (
    <main className="md:bg-bgImg bg-cover bg-no-repeat h-[calc(100vh-64px)] w-full text-sm">
      <section className="h-full w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto flex justify-center md:items-center">
        <AuthCard/>
      </section>
    </main>
  );
}
