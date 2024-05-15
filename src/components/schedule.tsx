interface ITEXTWITHIMGFLEX {
  title: string;
  day: string;
  month: string;
}

export default function Schedule({ title, day, month }: ITEXTWITHIMGFLEX) {
  return (
    <div className="flex gap-4 ">
      <div className="w-full max-w-[60px] h-[60px] bg-[#EFFAF5] flex flex-col items-center  ">
        <h1 className="text-[#227A5F] font-semibold">{day}</h1>
        <p className="text-[#227A5F] font-medium">{month}</p>
      </div>

      <div>
        <h1 className="font-semibold text-[#212630]">{title}</h1>
      </div>
    </div>
  );
}
