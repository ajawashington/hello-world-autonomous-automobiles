const LeaderComponent = (leader) => {
    return `
            <div class="leader__name">${leader.leader}</div>
            <div class="leader__reign">${leader.reign}</div>
            <button id="button--${leader.leader}">Learn More!</button>

            <dialog class="dialog--leader" id="details--${leader.leader}">
            <div>Name: ${leader.leader}</div>
            <div>Reign: ${leader.reign}</div>

            <button class="close__dialog">Close Dialog</button>
            </dialog>
    `
}

export default LeaderComponent