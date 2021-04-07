import {especies} from '../data/especies'

export const getEspById = (id) => {

 
  return especies.find(esp => esp.id === id);
}
