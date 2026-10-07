import { ErinnTimeBanner } from "@/components/trade/ErinnTimeBanner";
import { BarterList } from "@/components/trade/BarterList";
import { BarterTodo } from "@/components/trade/BarterTodo";
import { ImageWithModal } from "@/components/trade/ImageWithModal";
import { ThemeToggle } from "@/components/trade/ThemeToggle";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8 space-y-10">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <ErinnTimeBanner />
      <BarterList />
      <BarterTodo />
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">교역 루트</h2>
        <div className="rounded-lg border overflow-hidden">
          <ImageWithModal
            src="/images/trade_root.png"
            alt="교역 루트"
          />
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">물물교역 루트</h2>
        <div className="flex flex-col min-[991px]:flex-row gap-4">
          <div className="rounded-lg border overflow-hidden flex-1">
            <ImageWithModal
              src="/images/barter_1.png"
              alt="물물교역 루트 1"
              sizes="(min-width: 991px) 50vw, 100vw"
            />
          </div>
          <div className="rounded-lg border overflow-hidden flex-1">
            <ImageWithModal
              src="/images/barter_2.png"
              alt="물물교역 루트 2"
              sizes="(min-width: 991px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
