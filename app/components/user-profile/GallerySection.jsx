import Image from "next/image";

export default function GallerySection() {
  return (

    <div className="bg-white rounded-2xl  p-6 px-2 lg:px-8 ">
      <div className="flex justify-between mb-4">
        <h2 className="text-lg lg:text-xl font-semibold mb-2">Photos</h2>
        <button className="text-tert text-sm">See More</button>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Image
          className="max-h-[260px] h-full w-full rounded-2xl object-cover"
          src={`/assets/coverImg.png`}
          height={1000}
          width={3500}
          alt="Cover Photo"
        />
        <Image
          className="max-h-[260px] h-full w-full rounded-2xl object-cover"
          src={`/assets/gal2.png`}
          height={1000}
          width={3500}
          alt="Cover Photo"
        />
        <Image
          className="max-h-[260px] h-full w-full rounded-2xl object-cover"
          src={`/assets/gal3.png`}
          height={1000}
          width={3500}
          alt="Cover Photo"
        />
        <Image
          className="max-h-[260px] h-full w-full rounded-2xl object-cover"
          src={`/assets/gal4.png`}
          height={1000}
          width={3500}
          alt="Cover Photo"
        />
      </div>
    </div>

  )
}
