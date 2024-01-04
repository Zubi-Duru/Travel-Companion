import AuthCard from "@/app/components/auth/AuthCard";

export default function Auth({
  searchParams
}) {
  console.log(searchParams);
  return (
    <main className="md:bg-bgImg bg-cover bg-no-repeat h-[calc(100vh-64px)] w-full text-sm">
      <section className="h-full w-5/6 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto flex justify-center md:items-center">
        <AuthCard type={searchParams.type}/>
      </section>
    </main>
  );
}
