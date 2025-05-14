// PatientDetail.tsx - 환자 상세정보 및 탭 메뉴 + 복약지도서 모달
import type { Patient } from "@/types/Patient";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MedicationModal from "@/components/MedicationModal";

// 더미 환자 리스트 (id 기반으로 조회)
const patients: Patient[] = [
  {
    id: 1,
    name: "김철수",
    age: 65,
    gender: "남성",
    ward: "301호",
    phone: "010-1234-5678",
  },
  {
    id: 2,
    name: "이영희",
    age: 72,
    gender: "여성",
    ward: "302호",
    phone: "010-5678-1234",
  },
  {
    id: 3,
    name: "박민수",
    age: 58,
    gender: "남성",
    ward: "303호",
    phone: "010-1111-2222",
  },
];

const PatientDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const patient = patients.find((p) => p.id === Number(id));
  const [tab, setTab] = useState<"오더조회" | "약반납" | "약보류">("오더조회");
  const [showModal, setShowModal] = useState(false);

  if (!patient) {
    return <div className="p-8">존재하지 않는 환자입니다.</div>;
  }

  return (
    <div className="p-8 bg-white min-h-screen">
      {/* 뒤로가기 버튼 */}
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-blue-500 hover:underline"
      >
        ← 환자 리스트로 돌아가기
      </button>

      <div className="mb-6">
        <h2 className="text-xl font-bold">선택된 환자 정보</h2>
        <p>
          {patient.name} / {patient.gender} / {patient.age}세 / {patient.ward}
        </p>
      </div>

      {/* 탭 메뉴와 복약지도서 버튼 */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          {["오더조회", "약반납", "약보류"].map((label) => (
            <button
              key={label}
              onClick={() => setTab(label as typeof tab)}
              className={`px-4 py-2 rounded border ${
                tab === label ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => setShowModal(true)}
        >
          복약지도서
        </button>
      </div>

      <div className="border p-4 bg-gray-50">
        <p className="text-gray-700">현재 탭: {tab}</p>
        <p className="mt-2 text-sm text-gray-500">
          (여기에 해당 탭의 정보를 보여줄 수 있습니다)
        </p>
      </div>

      {showModal && (
        <MedicationModal
          patient={patient}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default PatientDetail;
