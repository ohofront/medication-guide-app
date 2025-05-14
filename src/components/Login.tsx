// Login.tsx - 로그인 컴포넌트
import type { LoginProps } from "@/types/Login";
import { useState } from "react";

const Login = ({ onLogin }: LoginProps) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  // 폼 제출 처리 (Enter 키 또는 버튼 클릭 시)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 새로고침 방지
    onLogin(id, pw); // 부모 컴포넌트로 로그인 요청
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-6 w-[500px]"
    >
      <h2 className="text-xl font-bold mb-4 text-center">로그인</h2>

      <input
        className="w-full border border-gray-300 rounded px-3 py-2 mb-2"
        placeholder="ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="password"
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        placeholder="Password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
      />

      {/* Submit 버튼 (onClick 제거, type="submit" 유지) */}
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
