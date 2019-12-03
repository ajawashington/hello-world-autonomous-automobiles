import { useLeaders } from "../../spain/leaders/LeaderDataProvider.js";
import LeaderComponent from "./Leaders.js";



const LeaderListComponent = () => {


    const contentElement = document.querySelector(".leader__list")
    const leaders = useLeaders()

    contentElement.innerHTML += `
    ${
            leaders.map(
                (currentLeader) =>  LeaderComponent(currentLeader)).join("")
    }
   
    `
}

export default LeaderListComponent