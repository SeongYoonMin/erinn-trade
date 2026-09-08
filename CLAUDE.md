# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

`erinn-trade` — 마비노기 교역 시스템 도우미 웹사이트.
넥슨 오픈 API + 유저 직접 입력 혼합. 인증 없이 localStorage 기반 영속성만 사용.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server-first)
- **Language:** TypeScript
- **Package Manager:** pnpm
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **State:** Zustand + `persist` middleware (localStorage)
- **API:** Axios (서버 전용), @tanstack/react-query (클라이언트)
- **Validation:** Zod (API 응답 + 폼 스키마)
- **Forms:** React Hook Form + @hookform/resolvers

## Development Commands

```
pnpm install     # install dependencies
pnpm dev         # start dev server (localhost:3000)
pnpm build       # production build
pnpm lint        # lint
```

## Architecture

```
src/
  app/                  # Next.js App Router (Server-first)
    api/               # Route Handlers — 넥슨 API 프록시 (API 키 서버에서만 사용)
    providers.tsx      # QueryClientProvider 래퍼 ("use client")
    layout.tsx         # Root layout
    page.tsx           # Home page
  components/
    ui/                # shadcn/ui 컴포넌트
    trade/             # 교역 도메인 컴포넌트
  lib/
    axios.ts           # Axios 인스턴스 (넥슨 API base URL + API 키 헤더)
    query-client.ts    # React Query 클라이언트 (서버/클라이언트 공유)
    utils.ts           # cn() 유틸 (shadcn 제공)
  store/
    trade-store.ts     # Zustand + persist (localStorage key: erinn-trade-routes)
  schemas/
    trade.ts           # Zod 스키마 — tradeRouteSchema, nexonMarketResponseSchema
```

## Key Rules

- 기본은 Server Component. `"use client"` 는 React Query/Zustand 사용 시만.
- 넥슨 API 키(`NEXON_API_KEY`)는 `app/api/` Route Handler에서만 사용. 클라이언트 노출 금지.
- API 키 설정: `.env.local.example` 참고 → `.env.local` 복사 후 입력.
