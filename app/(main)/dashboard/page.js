import SearchBar from "@/app/components/SearchBar";
import Image from "next/image";

//API getUsers
// 1. get destination country for the flag
// 2. get dp
let destinationCountry = "NG";
let dp = "/assets/dp.png";
let name = "Patrick";

export default function Dashboard() {
  return (
    <main className="w-full">
      <div className="hidden md:flex justify-between items-center my-4 px-5">
        <div className="pr-10 w-1/3">
          <h1 className="text-3xl font-bold mb-1"> Hello {name}!</h1>
          <p className="text-sm ">Welcome back and explore new trips</p>
        </div>

        <div className="pr-4 w-4/6">
          <SearchBar />
        </div>

        <div className="flex gap-4 items-center">
          <div className="p-[0.2rem] bg-white rounded-full">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center ">
              <Image
                className="w-16 h-16 rounded-full scale-[1.05]"
                src={`https://flagsapi.com/${destinationCountry}/flat/64.png`}
                width="150"
                height="150"
              />
            </div>
          </div>
          <div className="w-14 h-14 rounded-full overflow-hidden ">
            <Image
              className="w-full h-full rounded-full"
              src={`${dp}`}
              width="2500"
              height="2500"
            />
          </div>
        </div>
      </div>
      <div className="md:hidden">
      <div>
      <hr className="mt-2"/>
      <div className="font-extrabold text-xl my-3 pl-5">Home</div>
      <hr/>
      </div>
      <div className="px-4  my-8">
        <SearchBar/>
      </div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}
