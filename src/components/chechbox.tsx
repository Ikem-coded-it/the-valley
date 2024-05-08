export default function Checkbox({
  label,
  num,
}: {
  label: string;
  num: number;
}) {
  return (
    <div className="flex items-center gap-3 p-4">
      <input
        type="checkbox"
        id="checkbox"
        className="bg-white checked:bg-[#227a5f] border"
      />
      {/* <label htmlFor="checkbox" className="h-[15px] w-[15px] border"></label> */}

      <div className="flex gap-3">
        <p>{label}</p>

        <div>{num}</div>
      </div>
    </div>
  );
}
