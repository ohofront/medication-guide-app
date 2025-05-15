import { useNavigate } from "react-router-dom";
import wardImage from "@/assets/list.png";

const PatientList = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 고해상도 이미지가 화면을 꽉 채우도록 */}
      <img
        src={wardImage}
        alt="환자 병동 리스트"
        className="absolute top-0 left-0 object-fill w-full h-full"
        draggable={false}
      />
      {/* 첫 번째 행: 노순임 → 나궁금으로 클릭 가능하게 */}
      <div
        className="absolute top-[200px] left-[150px] w-[60px] h-[20px] cursor-pointer"
        onClick={() => navigate("/detail")}
      >
        <div className="text-lg text-center text-white bg-black rounded bg-opacity-70">
          나궁금
        </div>
      </div>
    </div>
  );
};

export default PatientList;
