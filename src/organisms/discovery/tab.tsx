import TextWithNum from "@/molecules/directory/text-with-num";
import { directoryTabs } from "@/store/directories-tabs";

export default function Tab() {
  return (
    <div className="bg-white rounded-lg pt-4  flex">
      {directoryTabs.map((x, i) => {
        return <TextWithNum text={x.text} url={x.url} num={100} key={1} />;
      })}
    </div>
  );
}
