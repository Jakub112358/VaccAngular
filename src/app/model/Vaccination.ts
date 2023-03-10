
export interface Vaccination {
  id: number;
  name: string;
  isChecked: boolean;
  isDefault: boolean;
  diseasesId: number[];
  /**
   * intervals between vaccination doses, first one is counted from the day of birth.
   */
  intervals:number[];
  dosesDates?: Date[];
}
