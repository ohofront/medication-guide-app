// Login.tsx - 로그인 컴포넌트
import type { LoginProps } from "@/types/Login";
import { useState } from "react";

const Login = ({ onLogin }: LoginProps) => {
  // 입력 필드 상태 관리
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 폼 제출 시 호출 (Enter 키 또는 버튼 클릭)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 폼 제출 동작 차단
    onLogin(id, pw); // 부모 컴포넌트로 로그인 시도 전달
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white             // 배경 흰색
        rounded-lg           // 모서리 둥글게
        shadow-lg            // 그림자 효과
        p-6                  // 내부 여백
        w-full               // 너비 100%
        max-w-sm             // 최대 너비 제한 (24rem)
        mx-auto              // 가로 중앙 정렬
      "
    >
      {/* 제목 */}
      <h2 className="text-xl font-bold mb-4 text-center">로그인</h2>

      {/* 아이디 입력 */}
      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      {/* 비밀번호 입력 */}
      <input
        type="password"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      {/* 로그인 버튼 */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        로그인
      </button>
    </form>
  );
};

export default Login;
