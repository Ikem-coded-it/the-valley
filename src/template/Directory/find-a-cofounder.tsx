import Button from "@/components/button";

export default function FindACofounder() {
  return (
    <div className="bg-white flex justify-between items-center p-4 rounded-lg">
      <div className="flex items-center">
        <img src="/icons/magnify-glass.png" alt="magnifyng glass" />
        <h1 className="font-semibold text-xl text-[#227A5F] max-w-[219px]">
          Are you looking for a cofounder ?
        </h1>
      </div>

      <Button text="Find cofounder" className="bg-[#227a5f] text-white" />
    </div>
  );
}
