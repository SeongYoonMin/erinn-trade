import { ErinnTimeBanner } from "@/components/trade/ErinnTimeBanner";
import { BarterList } from "@/components/trade/BarterList";
import { BarterTodo } from "@/components/trade/BarterTodo";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <ErinnTimeBanner />
      <BarterList />
      <BarterTodo />
    </main>
  );
}
