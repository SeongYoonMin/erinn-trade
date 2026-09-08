import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface TradeRoute {
  id: string;
  from: string;
  to: string;
  item: string;
  buyPrice: number;
  sellPrice: number;
  createdAt: number;
}

interface TradeState {
  routes: TradeRoute[];
  addRoute: (route: Omit<TradeRoute, "id" | "createdAt">) => void;
  removeRoute: (id: string) => void;
  clearRoutes: () => void;
}

export const useTradeStore = create<TradeState>()(
  persist(
    (set) => ({
      routes: [],
      addRoute: (route) =>
        set((state) => ({
          routes: [
            ...state.routes,
            { ...route, id: crypto.randomUUID(), createdAt: Date.now() },
          ],
        })),
      removeRoute: (id) =>
        set((state) => ({
          routes: state.routes.filter((r) => r.id !== id),
        })),
      clearRoutes: () => set({ routes: [] }),
    }),
    { name: "erinn-trade-routes" }
  )
);
