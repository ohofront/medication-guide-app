// PatientList.tsx - 환자 리스트 컴포넌트 (React Router 기반)
import { patients } from "@/dummy/data";
import { useNavigate } from "react-router-dom";

const PatientList = () => {
  const navigate = useNavigate(); // 상세 페이지 이동을 위한 네비게이션 훅

  return (
    <div className="p-8 bg-white h-screen overflow-auto">
      {/* 페이지 제목 */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">환자 리스트</h2>

      {/* 환자 정보 테이블 */}
      <table className="w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">이름</th>
            <th className="border px-4 py-2">성별</th>
            <th className="border px-4 py-2">나이</th>
            <th className="border px-4 py-2">병실</th>
            <th className="border px-4 py-2">전화번호</th>
          </tr>
        </thead>

        {/* 환자 리스트 렌더링 */}
        <tbody>
          {patients.map((patient) => (
            <tr
              key={patient.id}
              className="hover:bg-blue-50 cursor-pointer"
              onClick={() => navigate(`/detail/${patient.id}`)} // 클릭 시 상세 페이지로 이동
            >
              <td className="border px-4 py-2">{patient.name}</td>
              <td className="border px-4 py-2">{patient.gender}</td>
              <td className="border px-4 py-2">{patient.age}</td>
              <td className="border px-4 py-2">{patient.ward}</td>
              <td className="border px-4 py-2">{patient.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
