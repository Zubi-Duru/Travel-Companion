import Image from "next/image";

export default function CoverImage({
    coverImgUrl = "/img/user-profile/defaultCover.png",
  }) {
  return (
    <Image
      className="max-h-[260px] w-full rounded-2xl object-cover"
      src={`${coverImgUrl}`}
      height={1000}
      width={3500}
      alt="Cover Photo"
    />
  );
}
