# TTodoist

React 기반의 Todo 관리 앱입니다. 오늘 할 일, 다음 예정 작업, 완료된 작업을 날짜 기준으로 분류해서 관리할 수 있습니다.

---

## 기술 스택

- React 18
- React Router v6
- Context API
- CSS Modules

---

## 주요 기능

- **작업 추가** — 제목, 설명, 마감일을 입력해 새 Todo를 추가
- **오늘** — 오늘 날짜가 마감인 작업 목록
- **다음** — 오늘 이후 마감인 예정 작업 목록
- **완료한 작업** — 완료 처리된 작업 목록

---

## 프로젝트 구조

```
src/
├── App.jsx                   # 라우터 설정
├── main.jsx                  # 앱 진입점
├── index.css
├── reset.css
├── store/
│   └── todos-context.jsx     # 전역 Todo 상태 관리 (Context API)
└── components/
    ├── Layout.jsx             # 공통 레이아웃 (사이드바 + Outlet)
    ├── Sidebar.jsx            # 사이드바 + 사이드바 전용 Context
    ├── SidebarItem.jsx        # 사이드바 메뉴 아이템
    ├── Home.jsx               # 홈 화면
    ├── Contents.jsx           # 오늘 할 일 페이지
    ├── Next.jsx               # 다음 예정 작업 페이지
    ├── Finish.jsx             # 완료한 작업 페이지
    ├── Todos.jsx              # Todo 목록 공통 컴포넌트
    ├── NewTodo.jsx            # 작업 추가 폼
    └── TodoFormInput.jsx      # 폼 인풋 공통 컴포넌트
```

---

## 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 상태 관리

`todos-context.jsx`에서 전역 상태를 관리합니다.

| 상태 / 함수               | 설명                   |
| ------------------------- | ---------------------- |
| `todos`                   | 미완료 Todo 목록       |
| `finishedTodos`           | 완료된 Todo 목록       |
| `todoAction`              | 작업 추가 폼 표시 여부 |
| `handleAddTodo(todo)`     | Todo 추가              |
| `handleFinishTodo(id)`    | Todo 완료 처리         |
| `handleStartTodoAction()` | 폼 열기                |
| `handleStopTodoAction()`  | 폼 닫기                |

---

## 페이지 라우팅

| 경로      | 컴포넌트   | 설명           |
| --------- | ---------- | -------------- |
| `/`       | `Home`     | 홈 화면        |
| `/today`  | `Contents` | 오늘 할 일     |
| `/next`   | `Next`     | 다음 예정 작업 |
| `/finish` | `Finish`   | 완료한 작업    |
