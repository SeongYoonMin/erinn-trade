export type RegionId = "karu" | "connous" | "calida" | "pera";

export const REGIONS: Record<RegionId, string> = {
  karu:    "카루 숲",
  connous: "콘누스 오아시스",
  calida:  "칼리다 탐사 캠프",
  pera:    "페라 화산",
};

export interface BarterItem {
  id: string;
  region: RegionId;
  tier: number;
  itemName: string;
  required: { name: string; qty: number }[];
  weeklyLimit: number;
}

export const BARTER_ITEMS: BarterItem[] = [
  // 카루 숲
  { id: "karu-1", region: "karu", tier: 1, itemName: "우드 테이블",      required: [{ name: "새우 조련 미끼", qty: 100 }, { name: "실리엔", qty: 50 }],                                                        weeklyLimit: 25 },
  { id: "karu-2", region: "karu", tier: 2, itemName: "목공예품",          required: [{ name: "마법의 양피지", qty: 15 }, { name: "질긴 끈", qty: 30 }],                                                          weeklyLimit: 15 },
  { id: "karu-3", region: "karu", tier: 3, itemName: "스톤 홀스 조각상",  required: [{ name: "힐웬 합금", qty: 20 }, { name: "밀가루", qty: 50 }],                                                               weeklyLimit: 10 },
  { id: "karu-4", region: "karu", tier: 4, itemName: "카루 표고 버섯",    required: [{ name: "스핀 기어", qty: 8 }, { name: "중급 나무장작", qty: 40 }, { name: "고급 실크", qty: 32 }],                        weeklyLimit: 8  },
  { id: "karu-5", region: "karu", tier: 5, itemName: "조개 껍질 화석",    required: [{ name: "에너지 증폭 장치", qty: 6 }, { name: "튼튼한 고리", qty: 3 }, { name: "마법의 깃털펜", qty: 15 }],                weeklyLimit: 3  },
  { id: "karu-6", region: "karu", tier: 6, itemName: "태양 문양 방패",    required: [{ name: "탈틴 농장 달콤 케이크", qty: 3 }, { name: "레드문 귀걸이", qty: 3 }, { name: "천연 고무", qty: 3 }],              weeklyLimit: 3  },

  // 코누스 오아시스
  { id: "connous-1", region: "connous", tier: 1, itemName: "고운 모래",          required: [{ name: "스태미나 500 포션", qty: 75 }, { name: "매듭끈", qty: 50 }],                                               weeklyLimit: 25 },
  { id: "connous-2", region: "connous", tier: 2, itemName: "프리즌 고스트의 날개", required: [{ name: "쿠션용 솜", qty: 15 }, { name: "최고급 실크", qty: 30 }],                                                  weeklyLimit: 15 },
  { id: "connous-3", region: "connous", tier: 3, itemName: "오아시스 그림",       required: [{ name: "최고급 가죽끈", qty: 10 }, { name: "질긴 실", qty: 30 }],                                                  weeklyLimit: 10 },
  { id: "connous-4", region: "connous", tier: 4, itemName: "선인장 꽃",           required: [{ name: "정령의 리큐르", qty: 8 }, { name: "은판", qty: 16 }, { name: "고급 옷감", qty: 32 }],                     weeklyLimit: 8  },
  { id: "connous-5", region: "connous", tier: 5, itemName: "거대 송곳니 화석",    required: [{ name: "펫 놀이세트", qty: 3 }, { name: "건초 더미", qty: 9 }, { name: "마력 깃든 나무장작", qty: 15 }],           weeklyLimit: 3  },
  { id: "connous-6", region: "connous", tier: 6, itemName: "태양의 도자기",       required: [{ name: "탈틴 농장 재스민 향수", qty: 2 }, { name: "장식용 크리스탈 검", qty: 2 }],                                 weeklyLimit: 2  },

  // 칼리다 탐사 캠프
  { id: "calida-1", region: "calida", tier: 1, itemName: "맥반석 계란",   required: [{ name: "마나 500 포션", qty: 25 }, { name: "고급 나무장작", qty: 50 }],                                                    weeklyLimit: 25 },
  { id: "calida-2", region: "calida", tier: 2, itemName: "칼리다 연어",   required: [{ name: "정화된 토끼의 발", qty: 15 }, { name: "에너지 컨버터", qty: 15 }],                                                  weeklyLimit: 15 },
  { id: "calida-3", region: "calida", tier: 3, itemName: "온천 입욕제",   required: [{ name: "최고급 바닐라 향초", qty: 20 }, { name: "끈끈이 풀", qty: 30 }],                                                    weeklyLimit: 10 },
  { id: "calida-4", region: "calida", tier: 4, itemName: "대형 캠핑 텐트", required: [{ name: "고급 가죽끈", qty: 40 }, { name: "인조 잔디", qty: 8 }, { name: "에메랄드 퓨즈", qty: 8 }],                      weeklyLimit: 8  },
  { id: "calida-5", region: "calida", tier: 5, itemName: "핑크 솔트",     required: [{ name: "최고급 나무장작", qty: 9 }, { name: "미스릴 대못", qty: 9 }, { name: "발리스타용 독 묻은 와이번 볼트", qty: 9 }], weeklyLimit: 3  },

  // 페라 화산
  { id: "pera-1", region: "pera", tier: 1, itemName: "화산 머드팩",        required: [{ name: "동판", qty: 50 }, { name: "신비한 허브 가루", qty: 75 }],                                                         weeklyLimit: 25 },
  { id: "pera-2", region: "pera", tier: 2, itemName: "마그마 스톤",         required: [{ name: "미스릴판", qty: 30 }, { name: "보릿가루", qty: 45 }],                                                             weeklyLimit: 15 },
  { id: "pera-3", region: "pera", tier: 3, itemName: "익시온의 뿔",         required: [{ name: "금판", qty: 50 }, { name: "마리오네트 500 포션", qty: 30 }],                                                      weeklyLimit: 10 },
  { id: "pera-4", region: "pera", tier: 4, itemName: "화산 도마뱀의 알",    required: [{ name: "최고급 옷감", qty: 40 }, { name: "생명력 500 포션", qty: 16 }, { name: "빤짝이 종이", qty: 40 }],                weeklyLimit: 8  },
  { id: "pera-5", region: "pera", tier: 5, itemName: "라스파 흑표범의 가죽", required: [{ name: "특급 나무장작", qty: 9 }, { name: "조화의 코스모스 퍼퓸", qty: 6 }, { name: "뮤턴트", qty: 3 }],                weeklyLimit: 3  },
];
