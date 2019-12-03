import { useCities } from "./CityDataProvider.js";
import CityComponent from "./cities.js";

const CityListComponent = () => {


  const contentElement = document.querySelector(".city__List")
  const cities = useCities()

  contentElement.innerHTML += `
  ${
          cities.map(
              (currentCity) =>  CityComponent(currentCity)).join("")
  }
 
  `
}

export default CityListComponent
