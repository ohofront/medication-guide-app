export interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  ward: string;
  phone: string;
}

export interface onSelectProps {
  onSelect: (patient: Patient) => void;
}
