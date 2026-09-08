"use client";

import { useEffect } from "react";
import {
  MATERIAL_SOURCES,
  ACQUISITION_TYPE_LABEL,
  type AcquisitionType,
} from "@/data/material-sources";

interface MaterialModalProps {
  materialName: string;
  onClose: () => void;
}

const TYPE_COLOR: Record<AcquisitionType, string> = {
  npc:    "bg-blue-100 text-blue-700",
  craft:  "bg-green-100 text-green-700",
  drop:   "bg-red-100 text-red-700",
  gather: "bg-yellow-100 text-yellow-700",
  quest:  "bg-purple-100 text-purple-700",
  other:  "bg-zinc-100 text-zinc-600",
};

export function MaterialModal({ materialName, onClose }: MaterialModalProps) {
  const methods = MATERIAL_SOURCES[materialName] ?? [];

  // ESC 닫기
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-xl border bg-card p-5 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 헤더 */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold">{materialName}</h3>
          <button
            onClick={onClose}
            className="rounded p-1 text-muted-foreground hover:bg-muted"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        <p className="mt-1 text-xs text-muted-foreground">획득 방법</p>

        {/* 내용 */}
        <div className="mt-3 space-y-2">
          {methods.length === 0 ? (
            <p className="text-sm text-muted-foreground">정보 없음 — 직접 입력이 필요합니다.</p>
          ) : (
            methods.map((m, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 text-xs font-medium ${TYPE_COLOR[m.type]}`}
                >
                  {ACQUISITION_TYPE_LABEL[m.type]}
                </span>
                <span>{m.detail}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
