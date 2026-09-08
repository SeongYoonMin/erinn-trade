"use client";

import { useEffect, useState } from "react";

const KST_OFFSET = 9 * 3600_000;
const ERINN_DAY_MS = 36 * 60 * 1000; // 36분 = 1 에린일
const ERINN_HOUR_MS = 90_000;         // 90초 = 1 에린시간
const ERINN_MIN_MS = 1_500;           // 1.5초 = 1 에린분
const SEASON_END = new Date("2026-08-13T00:00:00+09:00");

function getNextSaturdayResetMs(): number {
  const nowKST = Date.now() + KST_OFFSET;
  const d = new Date(nowKST);
  const day = d.getUTCDay(); // 0=일, 6=토
  const daysUntilSat = (6 - day + 7) % 7;
  const nextSat = new Date(nowKST);
  nextSat.setUTCDate(nextSat.getUTCDate() + daysUntilSat);
  nextSat.setUTCHours(7, 0, 0, 0); // 토 7AM KST
  // 이미 지난 경우 (오늘이 토요일이고 7시 이후)
  if (nextSat.getTime() <= nowKST) {
    nextSat.setUTCDate(nextSat.getUTCDate() + 7);
  }
  return nextSat.getTime() - KST_OFFSET; // UTC ms
}

function formatCountdown(ms: number): string {
  if (ms <= 0) return "0일 00:00:00";
  const totalSec = Math.floor(ms / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;
  const hh = String(hours).padStart(2, "0");
  const mm = String(mins).padStart(2, "0");
  const ss = String(secs).padStart(2, "0");
  return `${days}일 ${hh}:${mm}:${ss}`;
}

interface ErinnTime {
  hour: number;
  min: number;
  isDay: boolean;
  seasonDaysLeft: number;
  resetCountdown: string;
}

function calcErinnTime(): ErinnTime {
  const now = Date.now();
  const nowKST = now + KST_OFFSET;
  const pos = nowKST % ERINN_DAY_MS;
  const hour = Math.floor(pos / ERINN_HOUR_MS);
  const min = Math.floor((pos % ERINN_HOUR_MS) / ERINN_MIN_MS);
  const isDay = hour >= 6 && hour < 18;
  const seasonDaysLeft = Math.ceil((SEASON_END.getTime() - now) / 86_400_000);
  const resetMs = getNextSaturdayResetMs() - now;
  return { hour, min, isDay, seasonDaysLeft, resetCountdown: formatCountdown(resetMs) };
}

export function ErinnTimeBanner() {
  const [state, setState] = useState<ErinnTime>(calcErinnTime);

  useEffect(() => {
    const id = setInterval(() => setState(calcErinnTime()), 1000);
    return () => clearInterval(id);
  }, []);

  const { hour, min, isDay, seasonDaysLeft, resetCountdown } = state;
  const hh = String(hour).padStart(2, "0");
  const mm = String(min).padStart(2, "0");

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-lg border bg-card px-5 py-3 text-sm font-medium text-card-foreground">
      <span className="text-base">
        {isDay ? "☀️" : "🌙"} 에린시간 {hh}:{mm}
      </span>
      <span className="text-muted-foreground">|</span>
      <span>
        시즌{" "}
        {seasonDaysLeft > 0 ? (
          <span className="font-semibold">D-{seasonDaysLeft}</span>
        ) : (
          <span className="text-destructive font-semibold">종료</span>
        )}
      </span>
      <span className="text-muted-foreground">|</span>
      <span>
        리셋까지 <span className="font-semibold tabular-nums">{resetCountdown}</span>
      </span>
    </div>
  );
}
