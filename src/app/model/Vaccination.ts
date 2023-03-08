import {Disease} from "./Disease";

export interface Vaccination {
  name: string;
  diseases: Disease[];
  isChecked: boolean;
  isDefault: boolean;
}
