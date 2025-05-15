import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicationModal from "@/components/MedicationModal";
import ordersImage from "@/assets/order.png"; // 마스킹된 오더 이미지 (임영혜 포함되어야 함)

const PatientDetail = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen p-8 bg-white">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-500 hover:underline"
      >
        ← 환자 리스트로 돌아가기
      </button>

      {/* 환자 정보 */}
      <div className="mb-6">
        <p className="text-gray-800">
          나궁금 / 여성 / 86세 / 병실 8154-03 / 등록번호 12345678
        </p>
      </div>

      {/* 이미지 영역 (오더조회 + 버튼 + 마스킹 포함) */}
      <div className="w-full max-w-7xl ">
        {/* 오더 이미지 */}
        <img
          src={ordersImage}
          alt="오더 내역"
          className="w-auto rounded-lg shadow-lg"
        />

        {/* 이미지 위 복약지도서 버튼 */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-[180px] right-[180px] px-2 py-1 bg-[#276EA3] text-white rounded hover:bg-[#3988c4] shadow text-sm"
        >
          복약지도서
        </button>

        {/* 임영혜 마스킹 박스 (위치 조정 필요 시 개발자 도구로 픽셀 확인) */}
        <div className="absolute top-[270px] left-[850px] w-[150px] h-[500px] bg-black rounded" />
      </div>

      {/* 복약지도서 모달 */}
      {showModal && (
        <MedicationModal
          patient={{
            name: "나궁금",
            phone: "010-1234-5678",
          }}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default PatientDetail;
