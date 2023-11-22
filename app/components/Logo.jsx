import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-12 md:w-16 h-auto mr-2">
        <Image src="/assets/logo.png" width="100" height="100" alt="Logo" />
      </div>
      <h2 className={`text-lg md:text-2xl text-[#42A7C3] font-[volkhov]`}>
        Travel Buddy
      </h2>
    </div>
  );
}
