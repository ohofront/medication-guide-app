import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MedicationModal from "@/components/MedicationModal";
import ordersImage from "@/assets/order.png"; // 방금 업로드된 이미지

const PatientDetail = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="absolute z-10 px-3 py-1 text-sm text-white bg-black bg-opacity-50 rounded top-2 left-20 hover:underline"
      >
        ← 환자 리스트로 돌아가기
      </button>

      {/* 환자 정보 텍스트 */}
      <div className="absolute z-10 px-4 py-2 text-white bg-black bg-opacity-50 rounded top-12 left-72">
        나궁금 / 여성 / 86세 / 병실 8154-03 / 등록번호 12345678
      </div>

      {/* 복약지도서 버튼 */}
      <button
        onClick={() => setShowModal(true)}
        className="absolute top-28 right-6 px-4 py-2 bg-[#276EA3] text-white rounded hover:bg-[#3988c4] shadow z-10 text-sm"
      >
        복약지도서
      </button>

      {/* 이미지 전체 채우기 */}
      <img
        src={ordersImage}
        alt="오더 내역"
        className="absolute top-0 left-0 object-fill w-full h-full"
        style={{ imageRendering: "auto" }} // 또는 'crisp-edges' 실험 가능
        draggable={false}
      />

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
