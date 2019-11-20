const addMouseOverEventListeners = () => {

    const countryCard = document.querySelectorAll(".country__card")

    for (const card of countryCard) {
        card.addEventListener(
            "mouseover",
            theMouseOverEvent => {
                card.classList.add("highlightCard")

            }
        )
        card.addEventListener("mouseout", theMouseOverEvent => {
            card.classList.remove("highlightCard") 

        })

    }
}


export default addMouseOverEventListeners