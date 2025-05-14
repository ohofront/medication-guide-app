// Loading.tsx - 로딩 화면 컴포넌트

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Loading = () => {
  const navigate = useNavigate();

  // 컴포넌트 마운트 후 2초 후에 /list로 이동
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/list");
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-blue-600 font-semibold">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
