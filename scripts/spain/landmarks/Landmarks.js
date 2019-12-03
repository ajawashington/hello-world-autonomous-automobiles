// HTML Function

const LandmarkComponent = (landmark) => {
  return `
          <div class="landmark__name">${landmark.landmark}</div>
          <button id="button--${landmark.landmark.replace(/\s/g, '')}">Learn More!</button>

          <dialog class="dialog--landmark" id="details--${landmark.landmark}">
          <div>City: ${landmark.city}</div>

          <button class="close__dialog">Close Dialog</button>
          </dialog>
          `
}

export default LandmarkComponent