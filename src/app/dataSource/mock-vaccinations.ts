import {Vaccination} from "../model/Vaccination";

export const VACCINATIONS: Vaccination[] = [
  {id: 1, name: 'Vacc 3 in 1', isChecked: false, isDefault: false, diseasesId: [1,2,3],intervals:[0,10,10]},
  {id: 2, name: 'Vacc B', isChecked: false, isDefault: false, diseasesId: [4],intervals:[0,20]},
  {id: 3, name: 'Vacc C', isChecked: false, isDefault: false, diseasesId: [5],intervals:[0,30]},
  {id: 4, name: 'Vacc D', isChecked: false, isDefault: false, diseasesId: [6],intervals:[0,40]},
  {id: 5, name: 'Vacc 1 of 3', isChecked: false, isDefault: false, diseasesId: [1],intervals:[0,50]},
  {id: 6, name: 'Vacc 2 of 3', isChecked: false, isDefault: false, diseasesId: [2],intervals:[0,60]},
  {id: 7, name: 'Vacc 3 of 3', isChecked: false, isDefault: false, diseasesId: [3],intervals:[0,70]},
  {id: 8, name: 'Vacc B alt', isChecked: false, isDefault: false, diseasesId: [4],intervals:[0,80]},
  {id: 9, name: 'Vacc C alt', isChecked: false, isDefault: false, diseasesId: [5],intervals:[0,90]},
]
