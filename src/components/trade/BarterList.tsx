"use client";

import { useState } from "react";
import { BARTER_ITEMS, REGIONS, type RegionId } from "@/data/barter-items";
import { MaterialModal } from "@/components/trade/MaterialModal";

const REGION_IDS = Object.keys(REGIONS) as RegionId[];

const TIER_COLORS: Record<number, string> = {
  1: "bg-zinc-100 text-zinc-600",
  2: "bg-green-100 text-green-700",
  3: "bg-blue-100 text-blue-700",
  4: "bg-purple-100 text-purple-700",
  5: "bg-orange-100 text-orange-700",
  6: "bg-yellow-100 text-yellow-700",
};

function TierBadge({ tier }: { tier: number }) {
  const cls = TIER_COLORS[tier] ?? "bg-muted text-muted-foreground";
  return (
    <span className={`shrink-0 rounded px-1 py-0.5 text-xs font-bold ${cls}`}>
      T{tier}
    </span>
  );
}

export function BarterList() {
  const [activeRegion, setActiveRegion] = useState<RegionId>("karu");
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const items = BARTER_ITEMS.filter((item) => item.region === activeRegion);

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">물물교환 목록</h2>

      {/* 탭 */}
      <div className="flex flex-wrap gap-2">
        {REGION_IDS.map((region) => (
          <button
            key={region}
            onClick={() => setActiveRegion(region)}
            className={[
              "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
              activeRegion === region
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-muted/80",
            ].join(" ")}
          >
            {REGIONS[region]}
          </button>
        ))}
      </div>

      {/* 아이템 카드 그리드 */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="rounded-lg border bg-card p-3 text-card-foreground">
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-1.5 min-w-0">
                <TierBadge tier={item.tier} />
                <span className="font-medium">{item.itemName}</span>
              </div>
              <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                주간 {item.weeklyLimit}회
              </span>
            </div>
            <ul className="mt-2 space-y-0.5 text-sm text-muted-foreground">
              {item.required.map((r) => (
                <li key={r.name}>
                  <button
                    onClick={() => setSelectedMaterial(r.name)}
                    className="underline-offset-2 hover:underline hover:text-foreground transition-colors text-left"
                  >
                    {r.name}
                  </button>
                  {" "}×{r.qty}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {selectedMaterial && (
        <MaterialModal
          materialName={selectedMaterial}
          onClose={() => setSelectedMaterial(null)}
        />
      )}
    </section>
  );
}
