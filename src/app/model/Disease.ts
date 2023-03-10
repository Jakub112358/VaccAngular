
export interface Disease{
  id: number;
  name: string;
  isChecked?: boolean;
  isObligatory: boolean;
  selectedVaccId?: number;
}
