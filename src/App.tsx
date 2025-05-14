import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Login from "@/components/Login";
import Loading from "@/components/Loading";
import PatientList from "@/components/PatientList";
import PatientDetail from "@/components/PatientDetail";
import introImg from "@/assets/intro.png";
import SendComplete from "@/components/SendComplete";

export default function App() {
  const [showLogin, setShowLogin] = useState(false); // 로그인 컴포넌트 페이드인
  const [isLoggingIn, setIsLoggingIn] = useState(false); // 로딩 상태
  const navigate = useNavigate();
  const location = useLocation();

  // / 경로일 때만 로그인 컴포넌트 페이드인
  useEffect(() => {
    if (location.pathname === "/") {
      const timer = setTimeout(() => setShowLogin(true), 1000); // 1초 후 로그인 페이드인
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  // 로그인 처리
  const handleLogin = (id: string, pw: string) => {
    if (id === "admin" && pw === "1234") {
      setIsLoggingIn(true); // 로딩 시작
      setTimeout(() => {
        setIsLoggingIn(false);
        navigate("/list"); // 2초 후 /list 이동
      }, 2000);
    } else {
      alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
  };

  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* 인트로 이미지 (로그인 화면에서만 표시) */}
      {location.pathname === "/" && (
        <img
          src={introImg}
          className="w-full h-full object-cover absolute inset-0 z-0"
          alt="intro"
        />
      )}

      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-10 flex justify-center items-center h-screen">
              {isLoggingIn ? (
                <Loading />
              ) : (
                showLogin && (
                  <div className="w-full max-w-md animate-slide-in">
                    <div className="animate-slide-in">
                      <Login onLogin={handleLogin} />
                    </div>
                  </div>
                )
              )}
            </div>
          }
        />
        <Route path="/list" element={<PatientList />} />
        <Route path="/detail/:id" element={<PatientDetail />} />
        <Route path="/sent" element={<SendComplete />} />
      </Routes>
    </div>
  );
}
