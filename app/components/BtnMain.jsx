import Link from "next/link"
export default function BtnMain({url="",children}) {
  return (
    <Link href={url} className="rounded-3xl text-white px-3 md:px-5 py-2 md:py-2.5 box-border bg-gradient-to-br border-[1px] border-transparent from-[#FD6E6A] to-[#FFC600] inline-block">
      {children}
    </Link>
  );
}
