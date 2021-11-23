# 과제 설명

- 라이브 쇼핑을 위한 이벤트 등록, 수정 가능한 사용자 대시보드 페이지가 있음.
- 라이브 쇼핑 화면을 미리 볼 수 있는 페이지가 있음.
- 해당 코드에는 미 구현된 코드들이 있음.
- 해당 코드 기반으로 요구사항을 나열.

# 실행 환경
- node.js 14 이상 사용을 권장드립니다.

# 실행법
## API 서버
`live-shopping-server` 폴더 위치에서 `npm install` 혹은 `yarn install` 이후 `node dist/main` 실행 (포트번호 `5000`번)

## 클라이언트
`live-shopping-client` 폴더 위치에서 `yarn install` 명렁어로 `node_modules` 설치
이후 `yarn start` 실행

# 과제 내용
## 주제(시나리오)

옷을 좋아하는 당신은 의류 전문 상점을 운영하고 있었습니다. 지금까지는 혼자 소소하게 운영했는데, 라이브 방송을 원하는 사람들이 많아지면서 라이브 방송을 위한 별도의 페이지를 구성하고자 합니다. 몇 개의 기능은 금세 추가할 수 있지만, 서버에서 제공하는 api를 적절히 사용해야만 사용할 수 있는 기능들도 있어서 조금 골치아픈 상황! 당신이라면 손님들이 원하는 기능을 제한 기간 내에 추가할 수 있을까요? 도전해보세요!

## 과제 설명
* 본 과제는 지원자분의 `react.js` , `typescript` ,  `publishing`  역량을 검증하기 위한 과제입니다. 
* 베이스 코드는 `Typescript`, `create-react-app` 기반으로 작성되어 있으며, 이 코드에는 여러 개의 구현되지 않는 기능들이 있습니다. 요구사항을 잘 읽고, 하나씩 구현해주세요.
* 일부 문제를 제외한 모든 ui를 `@shopify/polaris` 를 사용하여 구현하였으나,  polaris ui 에 대한 깊은 지식 없이도 문제를 해결 할 수 있도록 구성하였습니다.  컴포넌트 문서는 [이 곳](https://polaris.shopify.com/components/get-started) 에서 조회 가능한 점 안내드립니다.
  *  [페이지(Page) 컴포넌트 링크](https://polaris.shopify.com/components/structure/page) 
  * [레이아웃(Layout) 컴포넌트 링크](https://polaris.shopify.com/components/structure/layout#navigation) 
  * [카드(Card) 컴포넌트 링크](https://polaris.shopify.com/components/structure/card#navigation)
  * [리소스 리스트(ResourceList) 컴포넌트 링크](https://polaris.shopify.com/components/lists-and-tables/resource-list)


## 수행 기술
* `Typescript`, `React.js`
* 설치되어있는 모듈(node_modules) 외에 다른 외부 라이브러리는 사용하지 않도록 합니다.

## 문제 리스트
[요구사항 문서를 참고](live-shopping-client/REQUIREMENT.md)

