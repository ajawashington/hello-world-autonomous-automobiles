// array of cities

const cities = [
  {
    city: "Madrid",
    population: "3,255,944",
    mayor: "Jose Luis Martinez-Almeida",
    imgUrl: '/images/Madrid.jpg'
  },
  {
    city: "Barcelona",
    population: "1,621,537",
    mayor: "Ada Colau",
    imgUrl: '/images/barcelona.jpg'

  },
  {
    city: "Valencia",
    population: "814,208",
    mayor: "Joan Ribo",
    imgUrl: '/images/valencia.jpg'
  }
]

export const useCities = () => {
  return cities
}