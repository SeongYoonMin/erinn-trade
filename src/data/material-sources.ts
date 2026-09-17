export type AcquisitionType = "npc" | "craft" | "drop" | "gather" | "quest" | "taillteann" | "other";

export interface Ingredient {
  name: string;
  ratio: string; // 예: "30%", "Lv.5 이상"
}

export interface AcquisitionMethod {
  type: AcquisitionType;
  detail: string;                  // craft면 스킬명, 나머지는 설명 문자열
  ingredients?: Ingredient[];      // craft 전용 — 재료 목록
}

/**
 * 재료명 → 획득 방법 목록
 * 빈 배열([])은 아직 정보가 없는 항목.
 */
export const MATERIAL_SOURCES: Record<string, AcquisitionMethod[]> = {
  // ── 카루 숲 ──────────────────────────────────────────────────
  "새우 조련 미끼": [
    {
      type: "craft",
      detail: "요리 스킬",
      ingredients: [
        { name: "새우",  ratio: "30%" },
        { name: "설탕",  ratio: "38%" },
        { name: "마늘",  ratio: "32%" },
      ],
    },
  ],
  "실리엔": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "실리엔 결정", ratio: "×5" },
      ],
    },
  ],
  "마법의 양피지": [
    {
      type: "craft",
      detail: "필기구 크래프트 스킬",
      ingredients: [
        { name: "마나허브",      ratio: "×10" },
        { name: "부드러운 양피지", ratio: "×1" },
        { name: "선라이트 허브",  ratio: "×10" },
      ],
    },
  ],
  "질긴 끈": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "굵은 실뭉치", ratio: "×5" },
      ],
    },
  ],
  "힐웬 합금": [
    {
      type: "craft",
      detail: "힐웬 공학 스킬 (방법 1)",
      ingredients: [
        { name: "무른 힐웬 광석 조각", ratio: "×15" },
      ],
    },
    {
      type: "craft",
      detail: "힐웬 공학 스킬 (방법 2)",
      ingredients: [
        { name: "니켈광석 조각",  ratio: "×1" },
        { name: "아연광석 조각",  ratio: "×1" },
        { name: "에메랄드 코어",  ratio: "×1" },
        { name: "주석광석 조각",  ratio: "×1" },
        { name: "힐웬",          ratio: "×1" },
      ],
    },
  ],
  "밀가루": [
    {
      type: "craft",
      detail: "티르코네일 NPC 알리샤 — 풍차 제분",
      ingredients: [
        { name: "밀", ratio: "×10" },
      ],
    },
  ],
  "스핀 기어": [
    {
      type: "craft",
      detail: "힐웬 공학 스킬",
      ingredients: [
        { name: "육각 너트", ratio: "×5" },
        { name: "육각 볼트", ratio: "×5" },
        { name: "힐웬",     ratio: "×2" },
      ],
    },
  ],
  "중급 나무장작": [
    {
      type: "craft",
      detail: "목공 스킬",
      ingredients: [
        { name: "나무장작", ratio: "×3" },
      ],
    },
  ],
  "고급 실크": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "가는 실뭉치", ratio: "×5" },
      ],
    },
  ],
  "에너지 증폭 장치": [
    {
      type: "craft",
      detail: "힐웬 공학 스킬",
      ingredients: [
        { name: "에너지 컨버터", ratio: "×3" },
        { name: "에메랄드 코어", ratio: "×3" },
      ],
    },
  ],
  "튼튼한 고리": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "매듭끈",             ratio: "×1" },
        { name: "어둠이 깃든 칼날 조각", ratio: "×1" },
      ],
    },
  ],
  "마법의 깃털펜": [
    {
      type: "craft",
      detail: "필기구 크래프트 스킬",
      ingredients: [
        { name: "골드 허브",       ratio: "×10" },
        { name: "마나 허브",       ratio: "×10" },
        { name: "생기 있는 깃털",  ratio: "×1" },
      ],
    },
  ],
  "탈틴 농장 달콤 케이크": [
    {
      type: "taillteann",
      detail: "음식과 향수를 만드는 풍요로운 마법의 솥",
      ingredients: [
        { name: "탈틴 농장 붉은 배",  ratio: "×1" },
        { name: "탈틴 농장 블랙베리", ratio: "×1" },
      ],
    },
  ],
  "탈틴 농장 레드문 귀걸이": [
    {
      type: "taillteann",
      detail: "보석과 장신구를 만드는 반짝이는 마법의 솥",
      ingredients: [
        { name: "탈틴 농장 석영",    ratio: "×1" },
        { name: "탈틴 농장 붉은 배", ratio: "×1" },
      ],
    },
  ],
  "탈틴 농장 천연 고무": [
    {
      type: "taillteann",
      detail: "유용한 공예품을 만드는 섬세한 마법의 솥",
      ingredients: [
        { name: "탈틴 농장 고무",  ratio: "×1" },
        { name: "탈틴 농장 오크라", ratio: "×1" },
      ],
    },
  ],

  // ── 코누스 오아시스 ──────────────────────────────────────────
  "스태미나 500 포션": [
    {
      type: "craft",
      detail: "포션 조제 스킬",
      ingredients: [
        { name: "네잎 클로버",      ratio: "×1" },
        { name: "물이 든 병",       ratio: "×1" },
        { name: "스태미나 300 포션", ratio: "×1" },
      ],
    },
  ],
  "매듭끈": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "가는 실뭉치", ratio: "×1" },
        { name: "굵은 실뭉치", ratio: "×1" },
      ],
    },
  ],
  "쿠션용 솜": [
    {
      type: "craft",
      detail: "핸디크래프트 스킬",
      ingredients: [
        { name: "가는 실뭉치", ratio: "×5" },
        { name: "고급 양털",   ratio: "×20" },
      ],
    },
  ],
  "최고급 실크": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "가는 실뭉치", ratio: "×6" },
      ],
    },
  ],
  "최고급 가죽끈": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "최고급 가죽", ratio: "×1" },
      ],
    },
  ],
  "질긴 실": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "가는 실뭉치", ratio: "×5" },
      ],
    },
  ],
  "정령의 리큐르": [
    {
      type: "craft",
      detail: "포션 조제 스킬",
      ingredients: [
        { name: "고대 정령의 화석 조각", ratio: "×1" },
        { name: "엘레멘탈 리무버",       ratio: "×2" },
        { name: "화이트 허브",           ratio: "×1" },
      ],
    },
  ],
  "은판": [
    {
      type: "craft",
      detail: "제련 스킬",
      ingredients: [
        { name: "은괴", ratio: "×1" },
      ],
    },
  ],
  "고급 옷감": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "굵은 실뭉치", ratio: "×5" },
      ],
    },
  ],
  "펫 놀이세트": [
    {
      type: "craft",
      detail: "핀즈 크래프트 스킬",
      ingredients: [
        { name: "나무판",              ratio: "×1" },
        { name: "펫이 좋아하는 잡동사니", ratio: "×1" },
      ],
    },
  ],
  "건초 더미": [
    {
      type: "craft",
      detail: "핸디크래프트 스킬",
      ingredients: [
        { name: "못쓰게 된 밀 이파리", ratio: "×20" },
        { name: "최고급 가죽끈",       ratio: "×1" },
      ],
    },
  ],
  "마력이 깃든 나무장작": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "실리엔",      ratio: "×1" },
        { name: "중급 나무장작", ratio: "×1" },
        { name: "힐웬",        ratio: "×1" },
      ],
    },
  ],
  "탈틴 농장 재스민 향수": [
    {
      type: "taillteann",
      detail: "음식과 향수를 만드는 풍요로운 마법의 솥",
      ingredients: [
        { name: "탈틴 농장 블랙베리", ratio: "×1" },
        { name: "탈틴 농장 오크라",   ratio: "×1" },
        { name: "탈틴 농장 재스민",   ratio: "×2" },
      ],
    },
  ],
  "장식용 크리스탈 검": [
    {
      type: "taillteann",
      detail: "보석과 장신구를 만드는 반짝이는 마법의 솥",
      ingredients: [
        { name: "탈틴 농장 석영", ratio: "×2" },
        { name: "탈틴 농장 고무", ratio: "×1" },
        { name: "탈틴 농장 오크라", ratio: "×1" },
      ],
    },
  ],

  // ── 칼리다 탐사 캠프 ─────────────────────────────────────────
  "마나 500 포션": [
    {
      type: "craft",
      detail: "포션 조제 스킬",
      ingredients: [
        { name: "네잎 클로버",  ratio: "×1" },
        { name: "마나 300 포션", ratio: "×1" },
      ],
    },
  ],
  "고급 나무장작": [
    {
      type: "craft",
      detail: "목공 스킬",
      ingredients: [
        { name: "중급 나무장작", ratio: "×3" },
      ],
    },
  ],
  "정화된 토끼의 발": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "돌연변이 토끼의 발", ratio: "×1" },
        { name: "실리엔",            ratio: "×1" },
      ],
    },
  ],
  "에너지 컨버터": [
    {
      type: "craft",
      detail: "힐웬 공학 스킬",
      ingredients: [
        { name: "실리엔", ratio: "×1" },
        { name: "힐웬",   ratio: "×1" },
      ],
    },
  ],
  "최고급 바닐라 향초": [
    {
      type: "craft",
      detail: "핸디크래프트 스킬",
      ingredients: [
        { name: "고급 바닐라 향초",  ratio: "×1" },
        { name: "정제된 촉매제",     ratio: "×1" },
      ],
    },
  ],
  "끈끈이 풀": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "돌연변이 식물의 점액질", ratio: "×1" },
        { name: "실리엔",                ratio: "×1" },
      ],
    },
  ],
  "고급 가죽끈": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "고급 가죽", ratio: "×1" },
      ],
    },
  ],
  "인조 잔디": [
    {
      type: "craft",
      detail: "핸디크래프트 스킬",
      ingredients: [
        { name: "꽃뭉치",    ratio: "×5" },
        { name: "싱싱한 풀", ratio: "×20" },
      ],
    },
  ],
  "에메랄드 퓨즈": [
    {
      type: "craft",
      detail: "힐웬 공학 스킬",
      ingredients: [
        { name: "에메랄드 코어", ratio: "×1" },
      ],
    },
  ],
  "최고급 나무장작": [
    {
      type: "craft",
      detail: "목공 스킬",
      ingredients: [
        { name: "고급 나무장작", ratio: "×3" },
      ],
    },
  ],
  "미스릴 대못": [
    {
      type: "craft",
      detail: "제련 스킬",
      ingredients: [
        { name: "미스릴괴", ratio: "×20" },
      ],
    },
  ],
  "발리스타용 독 묻은 와이번 볼트": [
    {
      type: "craft",
      detail: "핸디크래프트 스킬",
      ingredients: [
        { name: "나무장작",     ratio: "×1" },
        { name: "와이번의 발톱", ratio: "×1" },
        { name: "포이즌 포션",  ratio: "×1" },
      ],
    },
  ],

  // ── 페라 화산 ────────────────────────────────────────────────
  "동판": [
    {
      type: "craft",
      detail: "제련 스킬",
      ingredients: [
        { name: "동괴", ratio: "×1" },
      ],
    },
  ],
  "신비한 허브 가루": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "마나 허브",   ratio: "×1" },
        { name: "블러디 허브", ratio: "×1" },
        { name: "포이즌 허브", ratio: "×1" },
      ],
    },
  ],
  "미스릴판": [
    {
      type: "craft",
      detail: "제련 스킬",
      ingredients: [
        { name: "미스릴괴", ratio: "×1" },
      ],
    },
  ],
  "보릿가루": [
    {
      type: "craft",
      detail: "티르코네일 NPC 알리샤 — 풍차 제분",
      ingredients: [
        { name: "보리", ratio: "×10" },
      ],
    },
  ],
  "금판": [
    {
      type: "craft",
      detail: "제련 스킬",
      ingredients: [
        { name: "금괴", ratio: "×1" },
      ],
    },
  ],
  "마리오네트 500 포션": [
    {
      type: "craft",
      detail: "포션 조제 스킬",
      ingredients: [
        { name: "골드 허브",    ratio: "×1" },
        { name: "니켈광석 조각", ratio: "×1" },
        { name: "베이스 포션",  ratio: "×1" },
        { name: "아연광석 조각", ratio: "×1" },
        { name: "주석광석 조각", ratio: "×1" },
      ],
    },
  ],
  "최고급 옷감": [
    {
      type: "craft",
      detail: "방직 스킬",
      ingredients: [
        { name: "굵은 실뭉치", ratio: "×6" },
      ],
    },
  ],
  "생명력 500 포션": [
    {
      type: "craft",
      detail: "포션 조제 스킬",
      ingredients: [
        { name: "네잎 클로버",    ratio: "×1" },
        { name: "물이 든 병",     ratio: "×1" },
        { name: "생명력 300 포션", ratio: "×1" },
      ],
    },
  ],
  "빤짝이 종이": [
    {
      type: "craft",
      detail: "합성 스킬",
      ingredients: [
        { name: "작은 녹색구슬", ratio: "×1" },
        { name: "작은 빨간구슬", ratio: "×1" },
        { name: "작은 은색구슬", ratio: "×1" },
        { name: "작은 파란구슬", ratio: "×1" },
        { name: "종이",         ratio: "×10" },
      ],
    },
  ],
  "특급 나무장작": [
    {
      type: "craft",
      detail: "목공 스킬",
      ingredients: [
        { name: "순도 높은 강화제",  ratio: "×1" },
        { name: "최고급 나무장작", ratio: "×1" },
      ],
    },
  ],
  "조화의 코스모스 퍼퓸": [
    {
      type: "craft",
      detail: "핀즈 크래프트 스킬",
      ingredients: [
        { name: "마법가루",      ratio: "×10" },
        { name: "베이스 허브",   ratio: "×10" },
        { name: "빈 병",        ratio: "×1" },
        { name: "코스모스 추출액", ratio: "×1" },
      ],
    },
  ],
  "뮤턴트": [
    {
      type: "craft",
      detail: "매직 크래프트 스킬",
      ingredients: [
        { name: "돌연변이 식물의 점액질", ratio: "×5" },
        { name: "돌연변이 토끼의 발",    ratio: "×10" },
        { name: "사스콰치의 심장",       ratio: "×3" },
      ],
    },
  ],
};

export const ACQUISITION_TYPE_LABEL: Record<AcquisitionType, string> = {
  npc:        "NPC 구매",
  craft:      "제작",
  drop:       "드롭",
  gather:     "채집",
  quest:      "퀘스트",
  taillteann: "탈틴 농장",
  other:      "기타",
};
