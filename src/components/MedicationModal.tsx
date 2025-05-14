// MedicationModal.tsx - 복약지도서 모달 (이미지 3장 + 버튼)
import { useEffect, useState } from "react";
import img1 from "@/assets/med1.jpeg";
import img2 from "@/assets/med2.jpeg";
import img3 from "@/assets/med3.jpeg";
import { useNavigate } from "react-router-dom";
import Loading from "@/components/Loading";

interface MedicationModalProps {
  patient: {
    name: string;
    phone: string;
  };
  onClose: () => void;
}

const MedicationModal = ({ patient, onClose }: MedicationModalProps) => {
  const [step, setStep] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const images = [img1, img2, img3];
  const navigate = useNavigate(); // 추가

  // 이미지 순차 노출
  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < images.length - 1 ? prev + 1 : prev));
    }, 800);
    return () => clearInterval(timer);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleSend = () => {
    setIsSending(true); // 로딩 표시
    setTimeout(() => {
      navigate("/sent", { state: patient }); // 전송 완료 페이지 이동
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* 로딩 중이면 화면 전체에 Loading 컴포넌트만 보여줌 */}
      {isSending ? (
        <div className="absolute inset-0 z-50 bg-white flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-lg relative max-w-3xl w-full">
          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-1 right-2 text-gray-500 hover:text-black"
          >
            ✕
          </button>

          {/* 상단 영역 */}
          <div className="flex justify-between mb-4">
            <span className="font-bold text-lg">복약지도서</span>
            <div className="space-x-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                출력하기
              </button>
              <button
                onClick={handleSend}
                className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
              >
                환자에게 전송하기
              </button>
            </div>
          </div>

          {/* 이미지 리스트 */}
          <div className="flex gap-4 overflow-x-auto">
            {images.slice(0, step + 1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`med-${idx}`}
                className="w-[230px] rounded border flex-shrink-0"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationModal;
