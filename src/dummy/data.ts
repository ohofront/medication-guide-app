import type { Patient } from "@/types/Patient";

// 더미 환자 데이터 배열
export const patients: Patient[] = [
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
