import { useLandmarks } from "./LandmarkDataProvider.js";
import LandmarkComponent from "./Landmarks.js";



const LandmarkListComponent = () => {


    const contentElement = document.querySelector(".landmark__list")
    const landmakrs = useLandmarks()

    contentElement.innerHTML += `
    ${
            landmakrs.map(
                (currentLandmark) =>  LandmarkComponent(currentLandmark)).join("")
    }
   
    `
}

export default LandmarkListComponent