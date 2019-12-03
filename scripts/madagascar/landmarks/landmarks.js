const LandmarkComponent = (landmark) => {
    return `
            <div class="landmark__name">${landmark.landmark}</div>
            <div class="landmarkcity__name">${landmark.city}</div>
    `
}

export default LandmarkComponent
