const LeaderComponent = (leader) => {
    return `
    <div class="leader__name">${leader.leader}</div>
    <button id="button--${leader.leader.replace(/\s/g, '')}">Learn More!</button>

    <dialog class="dialog--landmark" id="details--${leader.leader.replace(/\s/g, '')}">
    <div>Reign: ${leader.reign}</div>

    <button class="close__dialog">Close Dialog</button>
    </dialog>
    `
}

export default LeaderComponent