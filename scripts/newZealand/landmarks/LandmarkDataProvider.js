//newzealand landmarks

const landmarks = [
    {
        city:"Auckland",
        landmark:"Sky Tower",
        imgUrl: '/images/skytower.jpg'
    },
    {
        city:"Wellington",
        landmark:"Wellington Botanic Gardens",
        imgUrl: '/images/garden.jpg'
    },
    {
        city:"Christchurch",
        landmark:"Avon River",
        imgUrl: '/images/avon_river.jpg'
    }
]

export const useLandmarks = () => {
    return landmarks
}