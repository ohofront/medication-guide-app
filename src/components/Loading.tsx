// Loading.tsx - 로딩 화면 컴포넌트

const Loading = () => (
  <div className="flex items-center justify-center h-full w-full bg-white">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-lg text-blue-600 font-semibold">
        진행중입니다...
      </p>
    </div>
  </div>
);

export default Loading;
