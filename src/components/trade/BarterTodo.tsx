"use client";

import { useEffect } from "react";
import { BARTER_ITEMS, REGIONS } from "@/data/barter-items";
import { useBarterStore } from "@/store/barter-store";

export function BarterTodo() {
  const { progress, increment, decrement, resetIfNewWeek } = useBarterStore();

  useEffect(() => {
    resetIfNewWeek();
  }, [resetIfNewWeek]);

  const totalDone = Object.values(progress).reduce((sum, n) => sum + n, 0);
  const totalLimit = BARTER_ITEMS.reduce((sum, item) => sum + item.weeklyLimit, 0);

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">이번주 물물교환</h2>
        <span className="text-sm text-muted-foreground">
          전체 완료{" "}
          <span className="font-semibold text-foreground">{totalDone}</span>
          {" / "}
          <span>{totalLimit}</span>
        </span>
      </div>

      <div className="space-y-2">
        {BARTER_ITEMS.map((item) => {
          const done = progress[item.id] ?? 0;
          const isDone = done >= item.weeklyLimit;

          return (
            <div
              key={item.id}
              className={[
                "flex items-center gap-3 rounded-lg border px-4 py-2.5 text-sm",
                isDone ? "border-border bg-muted/50 opacity-60" : "bg-card",
              ].join(" ")}
            >
              {/* 아이템명 + 지역 */}
              <span className={["min-w-0 flex-1 font-medium", isDone ? "line-through" : ""].join(" ")}>
                {item.itemName}
                <span className="ml-2 font-normal text-muted-foreground">
                  ({REGIONS[item.region]})
                </span>
              </span>

              {/* 카운터 */}
              {item.weeklyLimit <= 10 ? (
                <BlockCounter
                  done={done}
                  limit={item.weeklyLimit}
                  onIncrement={() => increment(item.id, item.weeklyLimit)}
                  onDecrement={() => decrement(item.id)}
                />
              ) : (
                <StepperCounter
                  done={done}
                  limit={item.weeklyLimit}
                  onIncrement={() => increment(item.id, item.weeklyLimit)}
                  onDecrement={() => decrement(item.id)}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

interface CounterProps {
  done: number;
  limit: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

function BlockCounter({ done, limit, onIncrement, onDecrement }: CounterProps) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: limit }).map((_, i) => (
        <button
          key={i}
          onClick={() => (i < done ? onDecrement() : onIncrement())}
          className={[
            "h-4 w-4 rounded-sm border transition-colors",
            i < done
              ? "border-primary bg-primary"
              : "border-muted-foreground/40 bg-transparent hover:border-primary/60",
          ].join(" ")}
          aria-label={i < done ? "진행 취소" : "진행 추가"}
        />
      ))}
      <span className="ml-1 w-8 text-right tabular-nums text-muted-foreground">
        {done}/{limit}
      </span>
    </div>
  );
}

function StepperCounter({ done, limit, onIncrement, onDecrement }: CounterProps) {
  return (
    <div className="flex items-center gap-1 tabular-nums">
      <button
        onClick={onDecrement}
        disabled={done <= 0}
        className="flex h-6 w-6 items-center justify-center rounded border text-sm disabled:opacity-30"
        aria-label="진행 취소"
      >
        −
      </button>
      <span className="w-12 text-center text-sm">
        {done} / {limit}
      </span>
      <button
        onClick={onIncrement}
        disabled={done >= limit}
        className="flex h-6 w-6 items-center justify-center rounded border text-sm disabled:opacity-30"
        aria-label="진행 추가"
      >
        +
      </button>
    </div>
  );
}
