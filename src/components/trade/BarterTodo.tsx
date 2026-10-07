"use client";

import { useEffect, useRef, useState } from "react";
import { BARTER_ITEMS, REGIONS } from "@/data/barter-items";
import { useBarterStore } from "@/store/barter-store";
import { MaterialTooltip } from "@/components/trade/MaterialTooltip";

export function BarterTodo() {
  const { progress, increment, decrement, setProgress, resetIfNewWeek } = useBarterStore();

  useEffect(() => {
    resetIfNewWeek();
  }, [resetIfNewWeek]);

  const totalDone  = Object.values(progress).reduce((sum, n) => sum + n, 0);
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
          const done      = progress[item.id] ?? 0;
          const remaining = item.weeklyLimit - done;
          const isDone    = remaining === 0;

          return (
            <div
              key={item.id}
              className={[
                "flex items-start gap-3 rounded-lg border px-4 py-3 text-sm",
                isDone ? "border-border bg-muted/50 opacity-60" : "bg-card",
              ].join(" ")}
            >
              {/* 아이템명 + 지역 + 재료 */}
              <div className="min-w-0 flex-1">
                <span className={["font-medium", isDone ? "line-through" : ""].join(" ")}>
                  {item.itemName}
                </span>
                <span className="ml-2 font-normal text-muted-foreground">
                  ({REGIONS[item.region]})
                </span>

                <div className="mt-2 rounded-md border bg-muted/30 divide-y divide-border/50">
                  {item.required.map((r) => {
                    const perExchange = r.qty / item.weeklyLimit;
                    const used = done * perExchange;
                    const left = remaining * perExchange;
                    return (
                      <div key={r.name} className="flex items-center justify-between px-2.5 py-1.5 text-xs">
                        <div className="flex items-center gap-1.5">
                          <MaterialTooltip name={r.name} />
                          <span className="rounded bg-muted px-1 py-0.5 text-muted-foreground/70 text-[10px]">
                            ×{perExchange}/회
                          </span>
                        </div>
                        <div className="flex items-center gap-3 tabular-nums shrink-0">
                          <span className="text-muted-foreground">{used} 사용</span>
                          <span className={["font-semibold", left === 0 ? "text-muted-foreground line-through" : "text-foreground"].join(" ")}>
                            {left} 남음
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* 카운터 */}
              <StepperCounter
                done={done}
                limit={item.weeklyLimit}
                onIncrement={() => increment(item.id, item.weeklyLimit)}
                onDecrement={() => decrement(item.id)}
                onSet={(v) => setProgress(item.id, v, item.weeklyLimit)}
              />
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
  onSet: (value: number) => void;
}

function StepperCounter({ done, limit, onIncrement, onDecrement, onSet }: CounterProps) {
  const [editing, setEditing] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startEdit = () => {
    setInputVal(String(done));
    setEditing(true);
    setTimeout(() => inputRef.current?.select(), 0);
  };

  const commitEdit = () => {
    setEditing(false);
    const parsed = parseInt(inputVal, 10);
    if (!isNaN(parsed)) onSet(parsed);
  };

  return (
    <div className="flex items-center gap-1 tabular-nums shrink-0">
      <button
        onClick={onDecrement}
        disabled={done <= 0}
        className="flex h-7 w-7 items-center justify-center rounded border text-sm hover:bg-muted disabled:opacity-30 transition-colors"
        aria-label="진행 취소"
      >
        −
      </button>

      {editing ? (
        <input
          ref={inputRef}
          type="number"
          min={0}
          max={limit}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={(e) => {
            if (e.key === "Enter") { e.currentTarget.blur(); }
            if (e.key === "Escape") { setEditing(false); }
          }}
          className="w-14 rounded border px-1 py-0.5 text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
      ) : (
        <button
          onClick={startEdit}
          className="w-14 rounded px-1 py-0.5 text-center text-sm hover:bg-muted transition-colors"
          title="클릭하여 직접 입력"
        >
          {done} / {limit}
        </button>
      )}

      <button
        onClick={onIncrement}
        disabled={done >= limit}
        className="flex h-7 w-7 items-center justify-center rounded border text-sm hover:bg-muted disabled:opacity-30 transition-colors"
        aria-label="진행 추가"
      >
        +
      </button>
    </div>
  );
}
