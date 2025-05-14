import { Link, useLocation } from "react-router-dom";

const SendComplete = () => {
  const location = useLocation();
  const patient = location.state as { name: string; phone: string };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white text-center">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        전송이 완료되었습니다!
      </h2>
      {patient ? (
        <p className="text-gray-700 mb-6">
          <strong>{patient.name}</strong>님에게
          <br />({patient.phone})로 복약지도서를 성공적으로 전송했습니다.
        </p>
      ) : (
        <p className="text-gray-500 mb-6">환자 정보가 없습니다.</p>
      )}
      <Link
        to="/list"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        리스트로 돌아가기
      </Link>
    </div>
  );
};

export default SendComplete;
