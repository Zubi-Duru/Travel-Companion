import Link from "next/link"
export default function BtnSec({url="",children}) {
  return (
    <Link href={url} className="font-medium text-tert border-[1px] border-tert py-1.5 px-4 md:py-2.5 md:px-4 rounded-3xl hover:bg-tert hover:text-white ">{children}</Link>
  )
}
