import { z } from "zod";

// Form schema for user trade route input
export const tradeRouteSchema = z.object({
  from: z.string().min(1, "출발지를 입력하세요"),
  to: z.string().min(1, "도착지를 입력하세요"),
  item: z.string().min(1, "아이템명을 입력하세요"),
  buyPrice: z.coerce.number().positive("구매가는 양수여야 합니다"),
  sellPrice: z.coerce.number().positive("판매가는 양수여야 합니다"),
});

export type TradeRouteFormValues = z.infer<typeof tradeRouteSchema>;

// Nexon API: market item response
export const nexonMarketItemSchema = z.object({
  item_name: z.string(),
  item_count: z.number(),
  item_price: z.number(),
  date_shop_sell_by_shop: z.string().optional(),
});

export const nexonMarketResponseSchema = z.object({
  auction_item: z.array(nexonMarketItemSchema),
});

export type NexonMarketItem = z.infer<typeof nexonMarketItemSchema>;
export type NexonMarketResponse = z.infer<typeof nexonMarketResponseSchema>;
