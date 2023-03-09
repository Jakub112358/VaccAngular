import {Vaccination} from "../model/Vaccination";

export const VACCINATIONS: Vaccination[] = [
  {id: 1, name: 'Vacc 3 in 1', isChecked: false, isDefault: false, diseasesId: [1,2,3]},
  {id: 2, name: 'Vacc B', isChecked: false, isDefault: false, diseasesId: [4]},
  {id: 3, name: 'Vacc C', isChecked: false, isDefault: false, diseasesId: [5]},
  {id: 4, name: 'Vacc D', isChecked: false, isDefault: false, diseasesId: [6]},
  {id: 5, name: 'Vacc 1 of 3', isChecked: false, isDefault: false, diseasesId: [1]},
  {id: 6, name: 'Vacc 2 of 3', isChecked: false, isDefault: false, diseasesId: [2]},
  {id: 7, name: 'Vacc 3 of 3', isChecked: false, isDefault: false, diseasesId: [3]},
  {id: 8, name: 'Vacc B alt', isChecked: false, isDefault: false, diseasesId: [4]},
  {id: 9, name: 'Vacc C alt', isChecked: false, isDefault: false, diseasesId: [5]},
]
