# Devcourse News Frontend

Devcourse News 프론트엔드는 `newsapi`를 통해 수집한 최신 뉴스를 LLM으로 요약 및 번역하여 보여주는 웹 애플리케이션입니다.

## 기술 스택

- React 18
- Styled Components
- Axios
- date-fns

## 주요 기능

- 날짜별 뉴스 조회
  - 날짜 슬라이더로 최근 5일간의 뉴스 조회 가능
  - 화살표 버튼으로 이전/이후 날짜 조회 가능
- 뉴스 기사 목록 표시
  - 제목, 작성자, 출처 등 메타정보 표시
  - 클릭 시 요약/번역 내용 확장 표시
- 페이지네이션
  - 한 페이지에 5개의 뉴스 기사 표시
  - 페이지 이동 버튼 제공

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start
```

## 백엔드 연동

- 백엔드 API 엔드포인트: `http://localhost:3000`
- API 서비스 파일: `src/services/api.js`에서 백엔드 URL 설정 가능

## 프로젝트 구조

```
devcourse-news-frontend/
├── public/                # 정적 파일
├── src/                   # 소스 코드
│   ├── components/        # 리액트 컴포넌트
│   │   ├── DateSelector.js   # 날짜 선택 컴포넌트
│   │   ├── NewsBoard.js      # 메인 뉴스보드 컴포넌트
│   │   ├── NewsItem.js       # 뉴스 아이템 컴포넌트
│   │   ├── NewsList.js       # 뉴스 목록 컴포넌트
│   │   └── Pagination.js     # 페이지네이션 컴포넌트
│   ├── services/          # API 서비스
│   │   └── api.js         # 백엔드 API 연동
│   ├── App.js             # 앱 메인 컴포넌트
│   ├── App.css            # 앱 스타일
│   ├── index.js           # 진입점
│   └── index.css          # 글로벌 스타일
└── package.json           # 프로젝트 설정 및 의존성
```
