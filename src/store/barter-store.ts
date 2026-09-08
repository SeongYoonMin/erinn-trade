import { create } from "zustand";
import { persist } from "zustand/middleware";

function getLastSaturdayResetMs(): number {
  const KST_OFFSET = 9 * 3600 * 1000;
  const nowKST = Date.now() + KST_OFFSET;
  const d = new Date(nowKST);
  const day = d.getUTCDay(); // 0=일, 6=토
  const daysSinceSat = (day + 1) % 7;
  const satKST = new Date(nowKST);
  satKST.setUTCDate(satKST.getUTCDate() - daysSinceSat);
  satKST.setUTCHours(7, 0, 0, 0); // 토요일 7AM KST (= UTC 기준 그대로 저장)
  if (satKST.getTime() > nowKST) {
    satKST.setUTCDate(satKST.getUTCDate() - 7);
  }
  return satKST.getTime() - KST_OFFSET; // UTC ms로 반환
}

interface BarterTodoState {
  progress: Record<string, number>;
  lastResetMs: number;
  increment: (id: string, limit: number) => void;
  decrement: (id: string) => void;
  resetIfNewWeek: () => void;
}

export const useBarterStore = create<BarterTodoState>()(
  persist(
    (set, get) => ({
      progress: {},
      lastResetMs: 0,
      increment: (id, limit) =>
        set((state) => {
          const current = state.progress[id] ?? 0;
          if (current >= limit) return state;
          return { progress: { ...state.progress, [id]: current + 1 } };
        }),
      decrement: (id) =>
        set((state) => {
          const current = state.progress[id] ?? 0;
          if (current <= 0) return state;
          return { progress: { ...state.progress, [id]: current - 1 } };
        }),
      resetIfNewWeek: () => {
        const lastReset = getLastSaturdayResetMs();
        if (get().lastResetMs < lastReset) {
          set({ progress: {}, lastResetMs: lastReset });
        }
      },
    }),
    { name: "erinn-barter-todo" }
  )
);
