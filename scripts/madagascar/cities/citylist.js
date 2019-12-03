import { useCities } from "./CityDataProvider.js";
import CityComponent from "./Cities.js";


const CityListComponent = () => {


    const contentElement = document.querySelector(".cityList")
    const cities = useCities()

    contentElement.innerHTML += `
    ${
            cities.map(
                (currentCity) =>  CityComponent(currentCity)).join("")
    }
   
    `
}

export default CityListComponent
