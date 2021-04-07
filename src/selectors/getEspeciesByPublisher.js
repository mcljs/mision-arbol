import {especies} from '../data/especies'

export const getEspeciesByPublisher = (publisher) => {

  const validPublishers = ['Forestales','Medicinal','Ornamentales']

  if (!validPublishers.includes(publisher)){

    throw new Error(`Publisher "${publisher}" no es correcto`)
  }

  return especies.filter(esp => esp.publisher === publisher);
}
