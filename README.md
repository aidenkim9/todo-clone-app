# ✅ TTodoist

React 기반의 Todo 관리 앱입니다. 날짜 기준으로 오늘 할 일, 다음 예정 작업, 완료된 작업을 분류해서 관리할 수 있으며, 새로고침 후에도 데이터가 유지됩니다.

> 배포 링크: https://todo-clone-app.vercel.app/

---

## 🚀 주요 기능

- **작업 추가** — 제목, 설명, 마감일 입력 후 Todo 추가
- **작업 수정** — 항목별 독립적인 수정 폼 (다른 항목에 영향 없음)
- **작업 삭제** — 삭제 확인 다이얼로그 후 제거
- **완료 처리** — 미완료 → 완료 탭으로 이동
- **오늘** — 오늘 마감인 Todo 목록
- **다음** — 오늘 이후 마감인 Todo 목록
- **완료한 작업** — 완료 처리된 Todo 목록
- **데이터 영속성** — localStorage로 새로고침 후에도 데이터 유지
- **유효성 검사** — 과거 날짜 입력 방지, 필수 필드 검증
- **잘못된 경로 처리** — 존재하지 않는 URL 접근 시 홈으로 리다이렉트

---

## 🛠️ 기술 스택

- **React 18**
- **React Router v6**
- **Context API + useReducer**
- **CSS Modules**
- **uuid** — 고유 ID 생성
- **localStorage** — 클라이언트 데이터 영속성

---

## 📁 프로젝트 구조

```
src/
├── App.jsx                     # 라우터 설정 및 와일드카드 리다이렉트
├── main.jsx
├── index.css
├── reset.css
├── store/
│   └── todos-context.jsx       # 전역 상태 관리 (Context API + useReducer)
└── components/
    ├── Layout.jsx               # 공통 레이아웃 (사이드바 + Outlet)
    ├── Sidebar.jsx              # 사이드바 + 사이드바 전용 Context
    ├── SidebarItem.jsx          # NavLink 기반 사이드바 메뉴 아이템
    ├── Home.jsx                 # 홈 화면
    ├── Contents.jsx             # 오늘 할 일 페이지
    ├── Next.jsx                 # 다음 예정 작업 페이지
    ├── Finish.jsx               # 완료한 작업 페이지
    ├── Todos.jsx                # Todo 목록 공통 컴포넌트
    ├── TodoForm.jsx             # 작업 추가 / 수정 통합 폼
    ├── TodoFormInput.jsx        # 폼 인풋 재사용 컴포넌트
    └── TodoButton.jsx           # 완료 / 삭제 / 수정 버튼 재사용 컴포넌트
```

---

## ⚙️ 시작하기

```bash
# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

---

## 🗂️ 상태 관리

`todos-context.jsx`에서 `useReducer`로 전역 상태를 관리합니다.
초기값은 **lazy init**으로 localStorage에서 한 번만 불러옵니다.

| 액션 타입 | 설명                               |
| --------- | ---------------------------------- |
| `ADD`     | 새 Todo 추가 (uuid로 고유 ID 생성) |
| `FINISH`  | Todo를 완료 목록으로 이동          |
| `DELETE`  | todos 또는 finishedTodos에서 제거  |
| `EDIT`    | 기존 Todo 내용 수정                |

| 상태 / 함수            | 설명                   |
| ---------------------- | ---------------------- |
| `todos`                | 미완료 Todo 목록       |
| `finishedTodos`        | 완료된 Todo 목록       |
| `todoAction`           | 작업 추가 폼 표시 여부 |
| `handleAddTodo(todo)`  | Todo 추가              |
| `handleFinishTodo(id)` | Todo 완료 처리         |
| `handleDeleteTodo(id)` | Todo 삭제              |
| `handleEditTodo(todo)` | Todo 수정              |

---

## 🗺️ 페이지 라우팅

| 경로      | 컴포넌트   | 설명                   |
| --------- | ---------- | ---------------------- |
| `/`       | `Home`     | 홈 화면                |
| `/today`  | `Contents` | 오늘 할 일             |
| `/next`   | `Next`     | 다음 예정 작업         |
| `/finish` | `Finish`   | 완료한 작업            |
| `*`       | 리다이렉트 | 잘못된 경로 → `/` 이동 |

---

## 💡 구현 중 고민했던 점

- **`useReducer` 도입** — 상태 로직이 늘어나면서 `useState` 여러 개 대신 `useReducer`로 통합해 관리 복잡도를 줄임
- **lazy init** — `localStorage` 읽기가 렌더링마다 실행되는 문제를 `useReducer`의 세 번째 인자(초기화 함수)로 해결
- **`isEditId` 방식** — 단일 `isEdit` boolean 대신 `editingId`를 관리해 항목별 독립적인 수정 폼 구현
- **NavLink 활용** — 직접 active 상태를 관리하던 방식을 `NavLink`의 `isActive`로 교체해 URL과 UI 동기화
