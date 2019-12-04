// array of cities 
const cities = [{
    city: "Antananarivo",
    population: "1.3 Million",
    mayor: "Lalao Ravalomanana",
    imgUrl: '/images/madCityAnt.jpg'
},
{
    city: "Toamasina",
    population: "390K",
    mayor: "Roland Ratsiraka",
    imgUrl: '/images/madCityToa.jpg'
},
{
    city: "Antsirabe",
    population: "257K",
    mayor: "Olga Ramalason",
    imgUrl: '/images/madCityAntsi.jpg'
},

// change these ^^ to your cities
]

export const useCities = () => {
return cities
}