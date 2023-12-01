export default function Card1({ svgIcon, title, content }) {
  return (
    <div className="flex items-center gap-8 w-4/5">
      <div className="bg-[#EFE084] flex items-center justify-center rounded-md p-2 ">
        {svgIcon}
      </div>
      <div>
        <h4 className="text-[#5E6282] text-lg mb-1 font-semibold">{title}</h4>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}
