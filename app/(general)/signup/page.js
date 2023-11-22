import Image from "next/image";
import Navbar from "@/app/components/Navbar";

export default function Signup() {
  return (
    <main className="md:bg-bgImg bg-cover bg-no-repeat h-[calc(100vh-64px)] w-full">
      <section className="h-full w-2/5 mx-auto flex justify-center items-center">
        <div className="flex flex-col gap-6 w-fit bg-white rounded-3xl p-5 text-sm">
          <div className="w-full rounded-xl overflow-clip">
            <button className="bg-[#A95629] w-1/2 py-3 text-white font-semibold">
              Signup
            </button>
            <button className="bg-[#C3C3C3] w-1/2 py-3 text-white font-semibold">
              Login
            </button>
          </div>
          <div className="px-20 flex flex-col gap-6">
            <h1 className="text-center font-semibold text-xl ">Sign Up</h1>
            <div className="flex flex-col gap-3">
              <button className="w-full py-3 border-[1px] rounded-3xl border-prim ">
                Sign up with facebook
              </button>
              <button className="w-full py-3 border-[1px] rounded-3xl border-prim ">
                Sign up with Google
              </button>
            </div>
            <div className="flex items-center justify-between">
              <hr className="w-2/5 inline-block border-t-[1.5px]" />
              <span>OR</span>
              <hr className="w-2/5 inline-block border-t-[1.5px]" />
            </div>
            <form className="space-y-3">
              <div>
                <div className="flex gap-3">
                  <div className="w-1/2">
                    <label for="firstName" className="block text-sec">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      className=" inline-block border-[1px] border-sec h-10 rounded-lg"
                    />
                  </div>
                  <div className="w-1/2">
                    <label for="lastName" className="block text-sec">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      className=" inline-block border-[1px] border-sec h-10 rounded-lg"
                    />
                  </div>
                </div>
                <div className="w-full my-3">
                  <label for="email" className="block text-sec">
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="w-full border-[1px] border-sec h-10 rounded-lg"
                  />
                </div>
              </div>

              <button
                className="bg-tert w-full py-3 rounded-3xl text-white opacity-60"
                disabled
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
