// HTML Function
const CityComponent = (city) => {
  return `

          <div class="city__name">${city.city}</div>
          <button id="button--${city.city}">Learn More!</button>

          <dialog class="dialog--city" id="details--${city.city}">
          <div>Population: ${city.population}</div>
          <div>Mayor: ${city.mayor}</div>
          <img src="${city.imgUrl}" class="dialog__img">


          <button class="close__dialog">Close Dialog</button>
          </dialog>
  `
}

export default CityComponent