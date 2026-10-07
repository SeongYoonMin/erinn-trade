"use client";

import {
  MATERIAL_SOURCES,
  ACQUISITION_TYPE_LABEL,
  type AcquisitionMethod,
  type AcquisitionType,
} from "@/data/material-sources";

const TYPE_COLOR: Record<AcquisitionType, string> = {
  npc:        "bg-blue-100 text-blue-700",
  craft:      "bg-green-100 text-green-700",
  drop:       "bg-red-100 text-red-700",
  gather:     "bg-yellow-100 text-yellow-700",
  quest:      "bg-purple-100 text-purple-700",
  taillteann: "bg-amber-100 text-amber-700",
  other:      "bg-zinc-100 text-zinc-600",
};

function MethodRow({ method: m }: { method: AcquisitionMethod }) {
  return (
    <div className="text-xs">
      <div className="flex items-center gap-1.5">
        <span className={`shrink-0 rounded px-1.5 py-0.5 font-medium ${TYPE_COLOR[m.type]}`}>
          {ACQUISITION_TYPE_LABEL[m.type]}
        </span>
        <span className="font-medium text-foreground">{m.detail}</span>
      </div>
      {m.ingredients && m.ingredients.length > 0 && (
        <table className="mt-1 ml-1 text-muted-foreground">
          <tbody>
            {m.ingredients.map((ing) => (
              <tr key={ing.name}>
                <td className="pr-2 py-0.5">{ing.name}</td>
                <td className="tabular-nums font-medium text-foreground">{ing.ratio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export function MaterialTooltip({ name }: { name: string }) {
  const methods = MATERIAL_SOURCES[name] ?? [];

  return (
    <span className="group relative inline-block">
      <span className="cursor-default underline-offset-2 hover:underline hover:text-foreground transition-colors">
        {name}
      </span>
      <div className="pointer-events-none invisible absolute left-0 top-full z-50 mt-1.5 w-64 rounded-lg border bg-card p-3 shadow-lg opacity-0 transition-opacity group-hover:visible group-hover:opacity-100">
        <p className="mb-2 font-medium text-sm text-foreground">{name}</p>
        {methods.length === 0 ? (
          <p className="text-xs text-muted-foreground">획득 방법 정보 없음</p>
        ) : (
          <div className="space-y-2">
            {methods.map((m, i) => <MethodRow key={i} method={m} />)}
          </div>
        )}
      </div>
    </span>
  );
}
