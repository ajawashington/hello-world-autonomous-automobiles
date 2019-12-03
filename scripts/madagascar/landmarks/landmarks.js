const LandmarkComponent = (landmark) => {
    return `
            <div class="landmark__name">${landmark.landmark}</div>
            <button id="button--${landmark.landmark}">Learn More!</button>

            <div class="landmark__city">${landmark.city}</div>
            <dialog class="dialog--landmark" id="details--${landmark.landmark}">
            <div>Name: ${landmark.landmark}</div>
            <div>City: ${landmark.city}</div>

            <button class="close__dialog">Close Dialog</button>
            </dialog>
            
    `
}

export default LandmarkComponent
