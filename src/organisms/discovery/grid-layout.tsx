import DirectoryCard from "@/molecules/directory/directory-card";

export default function GridLayout({ data }: { data?: any }) {
  return (
    <div className="grid max-[420px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 bg-white p-4">
      {data.map((x) => {
        return (
          <DirectoryCard
            imgUrl={x.imgUrl}
            fullName={x.fullName}
            role={x.industryRole}
          />
        );
      })}
    </div>
  );
}
