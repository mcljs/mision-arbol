import {especies} from '../data/especies'

export const getEspeciesByName = (name= '') => {

  if(name === '') {
    return [];
  }
  name = name.toLowerCase();

  return especies.filter(esp => esp.title.toLowerCase().includes(name) )
}

