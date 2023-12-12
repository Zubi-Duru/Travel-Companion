export default function Card1({ svgIcon, title, content }) {
  return (
    <div className="flex items-start gap-4 md:gap-8 xl:w-4/5">
      <div className="bg-[#EFE084] mt-2 flex items-center justify-center rounded-md p-2 ">
        {svgIcon}
      </div>
      <div>
        <h4 className="text-[#5E6282] text-base xl:text-lg md:mb-1 font-semibold">{title}</h4>
        <p className="text-xs md:text-sm">{content}</p>
      </div>
    </div>
  );
}
