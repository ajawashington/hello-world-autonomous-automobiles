const CityComponent = (city) => {
    return `
            <div class="city__name">${city.city}</div>
            <button id="button--${city.city}">Learn More!</button>

            <dialog class="dialog--city" id="details--${city.city}">
            <div>Population: ${city.population}</div>
            <div>Mayor: ${city.mayor}</div>

            <button class="close__dialog">Close Dialog</button>
            </dialog>
    `
}

export default CityComponent
