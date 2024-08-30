import InverterAnimation from "@/components/InverterAnimation";
import { getItems } from "@/lib/items";

export default async function Items() {
  const items = await getItems();

  return (
    <div className="flex justify-center items-center mt-64">
      <InverterAnimation />
    </div>
  );
}
