import { useLandmarks } from "./LandmarkDataProvider.js";
import LandmarkComponent from "./landmarks.js";


const LandmarkListComponent = () => {


    const contentElement = document.querySelector(".landmark__list")
    const landmarks = useLandmarks()

    contentElement.innerHTML += `
    ${
            landmarks.map(
                (currentLandmark) =>  LandmarkComponent(currentLandmark)).join("")
    }
   
    `
}

export default LandmarkListComponent
