/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // src 폴더의 모든 JSX/TSX 파일 포함
  ],
  theme: {
    extend: {
      // 로그인 애니메이션 설정
      animation: {
        "slide-in": "slideIn 1s ease-out forwards",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
