import { useLeaders } from "./LeaderDataProvider.js";
import LeaderComponent from "./leaders.js";


const LeaderListComponent = () => {


    const contentElement = document.querySelector(".leaderList")
    const leaders = useLeaders()

    contentElement.innerHTML += `
    ${
            leaders.map(
                (currentLeader) =>  LeaderComponent(currentLeader)).join("")
    }
   
    `
}

export default LeaderListComponent
