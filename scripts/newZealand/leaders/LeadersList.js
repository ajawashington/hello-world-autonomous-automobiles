import { useLeaders } from "./LeaderDataProvider.js";
import LeadersComponent from "./Leaders.js";


const LeadersListComponent = () => {

    const contentElement = document.querySelector(".leaders__list")
    const leaders = useLeaders()

    contentElement.innerHTML += `
    ${
        leaders.map((currentLeader) => LeadersComponent(currentLeader)).join("")
    }
    `

}

export default LeadersListComponent
