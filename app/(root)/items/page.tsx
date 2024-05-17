import { getItems } from "@/lib/items";

export default async function Items() {
  const items = await getItems();

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">Current items!</h1>
    </section>
  );
}
