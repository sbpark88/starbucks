// @ts-check

/**
 * Header MainMenu-Item Component
 * @param item
 * @returns {string}
 * @constructor
 */
const Item = (item) => `
<li class="item">
  <div class="item__name">${item.name}</div>
  <div class="item__contents">
    <div class="contents__menu">
      <ul class="inner">
        ${item.contents
          .map(
            (content) => `
            <li>
              <h4>${content.header}</h4>
              <ul>
                ${content.list.reduce((acc, li) => (acc += `<li>${li}</li>`), "")}
              </ul>
            </li>
          `,
          )
          .join("\n")}
      </ul>
    </div>
    <div class="contents__texture">
      <div class="inner">
        ${item.texture.reduce((acc, list) => {
          return (acc += `<h4>${list.header}</h4>
                <p>${list.paragraph}</p>`);
        }, "")}
      </div>
    </div>
  </div>
</li>
`;

export default Item;

const coffeeItem = {
  name: "COFFEE",
  contents: [
    {
      header: "커피",
      list: ["스타벅스 원두", "스타벅스 비아", "스타벅스 오리가미"],
    },
    {
      header: "에스프레소 음료",
      list: [
        "도피오",
        "에스프레소 마키아또",
        "아메리카노",
        "마키아또",
        "카푸치노",
        "라떼",
        "모카",
        "리스트레또 비안코",
      ],
    },
    {
      header: "커피 이야기",
      list: [
        "스타벅스 로스트 스팩트럼",
        "최상의 아라비카 원두",
        "한 잔의 커피가 완성되기까지",
        "클로버® 커피 추출 시스템",
      ],
    },
    {
      header: "최상의 커피를 즐기는 법",
      list: [
        "커피 프레스",
        "푸어 오버",
        "아이스 푸어 오버",
        "커피 메이커",
        "리저브를 매장에서 다양하게 즐기는 법",
      ],
    },
  ],
  texture: [
    {
      header: "나와 어울리는 커피 찾기",
      paragraph: "스타벅스가 여러분에게 어울리는 커피를 찾아드립니다.",
    },
    {
      header: "최상의 커피를 즐기는 법",
      paragraph: "여러가지 방법을 통해 다양한 풍미의 커피를 즐겨보세요.",
    },
  ],
};

const menuItem = {
  name: "MENU",
  contents: [
    {
      header: "음료",
      list: [
        "콜드 브루",
        "브루드 커피",
        "에스프레소",
        "프라푸치노",
        "블렌디드 음료",
        "스타벅스 피지오",
        "티(티바나)",
        "기타 제조 음료",
        "스타벅스 주스(병음료)",
      ],
    },
    {
      header: "푸드",
      list: [
        "베이커리",
        "케익",
        "샌드위치 & 샐러드",
        "따뜻한 푸드",
        "과일 & 요거트",
        "스낵 & 미니 디저트",
        "아이스크림",
      ],
    },
    {
      header: "상품",
      list: [
        "머그",
        "글라스",
        "플라스틱 텀블러",
        "스테인리스 텀블러",
        "보온병",
        "액세서리",
        "커피 용품",
        "패키지 티(티바나)",
      ],
    },
    {
      header: "카드",
      list: ["실물카드", "e-Gift 카드"],
    },
    {
      header: "메뉴 이야기",
      list: ["콜드 브루", "스타벅스 티바나"],
    },
  ],
  texture: [
    {
      header: "스타벅스 티바나",
      paragraph:
        "다양한 찻잎과 향신료 등 개성있는 재료로 새로운 맛과 향의 티를 선보입니다.",
    },
  ],
};

const storeItem = {
  name: "STORE",
  contents: [
    {
      header: "매장 찾기",
      list: ["퀵 검색", "지역 검색", "My 매장"],
    },
    {
      header: "매장 이야기",
      list: ["청담스타", "티바나 인스파이어드 매장", "파미에파크"],
    },
  ],
  texture: [
    {
      header: "매장 찾기",
      paragraph: "보다 빠르게 매장을 찾아보세요.",
    },
    {
      header: "청담스타",
      paragraph: "스타벅스 1,000호점인 청담스타점을 만나보세요.",
    },
  ],
};

const responsibilityItem = {
  name: "RESPONSIBILITY",
  contents: [
    {
      header: "지역 사회 참여 활동",
      list: [
        "회망배달 캠페인",
        "재능기부 카페 소식",
        "커뮤니티 스토어",
        "청년인재 양성",
        "우리 농산물 사랑 캠페인",
        "우리 문화 지키기",
      ],
    },
    {
      header: "환경보호 활동",
      list: ["환경 발자국 줄이기", "일회용 컵 없는 매장", "커피 원두 재활용"],
    },
    {
      header: "윤리 구매",
      list: ["윤리적 원두 구매", "공정무역 인증", "커피 농가 지원 활동"],
    },
    {
      header: "글로벌 사회 공헌",
      list: ["윤리경영 보고서", "스타벅스 재단", "지구촌 봉사의 달"],
    },
  ],
  texture: [
    {
      header: "커피원두 재활용",
      paragraph: "스타벅스 커피 원두를 재활용 해보세요.",
    },
  ],
};

const rewardsItem = {
  name: "MY STARBUCKS REWARDS",
  contents: [
    {
      header: "마이 스타벅스 리워드",
      list: [
        "마이 스타벅스 리워드 소개",
        "등급 및 혜택",
        "스타벅스 별",
        "자주하는 질문",
      ],
    },
    {
      header: "스타벅스 카드",
      list: [
        "스타벅스 카드 소개",
        "스타벅스 카드 갤러리",
        "등록 및 조회",
        "충전 및 이용안내",
        "분실신고/환불신청",
        "자주하는 질문",
      ],
    },
    {
      header: "스타벅스 카드 e-Gift",
      list: [
        "스타벅스 카드 e-Gift 소개",
        "이용안내",
        "선물하기",
        "자주하는 질문",
      ],
    },
  ],
  texture: [
    {
      header: "스타벅스 카드 등록하기",
      paragraph: "카드 등록 후 리워드 서비스를 누리고 사용내역도 조회해보세요.",
    },
  ],
};

const whatsNewItem = {
  name: "WHAT'S NEW",
  contents: [
    {
      header: "프로모션 & 이벤트",
      list: [
        "전체",
        "스타벅스 카드",
        "마이 스타벅스 리워드",
        "온라인",
        "2017 스타벅스 플래너",
      ],
    },
    {
      header: "새소식",
      list: [
        "전체",
        "상품 출시",
        "스타벅스의 문화",
        "스타벅스 사회공헌",
        "스타벅스 카드출시",
      ],
    },
    {
      header: "매장별 이벤트",
      list: ["일반 매장", "신규 매장"],
    },
  ],
  texture: [
    {
      header: "매장별 이벤트",
      paragraph: "스타벅스의 매장 이벤트 정보를 확인 하실 수 있습니다.",
    },
    {
      header: "소셜 스타벅스",
      paragraph: "다양한 스타벅스 SNS 채널을 통해 스타벅스를 만나보세요!",
    },
  ],
};

const mainMenuItems = [
  coffeeItem,
  menuItem,
  storeItem,
  responsibilityItem,
  whatsNewItem,
];

export { mainMenuItems };
