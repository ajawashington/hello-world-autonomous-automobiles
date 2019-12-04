// HTML Function

const LeaderComponent = (leader) => {
  return `
          <div class="leader__name">${leader.leader}</div>
          <button id="button--${leader.leader.replace(/\s/g, '')}">Learn More!</button>

          <dialog class="dialog--leader" id="details--${leader.leader}">
          <div>Reign: ${leader.reign}</div>
          <img src="${leader.imgUrl}" class="dialog__img">

          <button class="close__dialog">Close Dialog</button>
          </dialog>
          `
}

export default LeaderComponent