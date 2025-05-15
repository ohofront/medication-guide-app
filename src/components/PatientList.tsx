import { useNavigate } from "react-router-dom";
import wardImage from "@/assets/list.png";

const PatientList = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8 bg-white ">
      {/* 페이지 제목 */}
      <h2 className="mb-6 text-2xl font-bold text-gray-800">환자 리스트</h2>

      {/* 마스킹된 이미지 */}
      <div className="w-full max-w-7xl ">
        <img
          src={wardImage}
          alt="환자 병동 리스트"
          className="w-auto rounded-lg shadow-lg"
        />
        {/* 첫 번째 행: 노순임 → 나궁금으로 클릭 가능하게 */}
        <div
          className="absolute top-[230px] left-[150px] w-[60px] h-[20px] cursor-pointer bg-black"
          onClick={() => navigate("/detail")} // id=999 가정
        >
          <div className="items-center text-xs text-center text-white">
            나궁금
          </div>{" "}
          {/* 접근성용 숨김 텍스트 */}
        </div>
        {/* 마스킹 박스들 (신율아, 환자명, 등록번호, 담당의, 담당간호사) */}
        <div className="absolute top-[250px] left-[150px] w-[60px] h-[170px] bg-black rounded" />{" "}
        {/* 환자명 */}
        <div className="absolute top-[230px] left-[210px] w-[90px] h-[190px] bg-black rounded" />{" "}
        {/* 등록번호 */}
        <div className="absolute top-[230px] left-[510px] w-[100px] h-[190px] bg-black rounded" />{" "}
        {/* 담당교수 & 담당의 */}
        <div className="absolute top-[230px] left-[1000px] w-[60px] h-[190px] bg-black  rounded" />{" "}
        {/* 담당간호사 */}
        <div className="absolute top-[230px] left-[1230px] w-[60px] h-[190px] bg-black rounded" />{" "}
        {/* 환자명 */}
      </div>
    </div>
  );
};

export default PatientList;
