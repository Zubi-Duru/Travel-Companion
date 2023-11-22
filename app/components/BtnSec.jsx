import Link from "next/link"
export default function BtnSec(url,children) {
  return (
    <Link href={url} className="hidden md:block text-tert border-[1px] border-tert py-3 px-5 rounded-3xl">{children}</Link>
  )
}
