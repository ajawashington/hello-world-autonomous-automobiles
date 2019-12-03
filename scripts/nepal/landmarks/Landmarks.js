const LandmarkComponent = (landmark) => {
    return `
            <div class="landmark__name">${landmark.landmark}</div>
            <div class="landmark__city">-${landmark.city}-</div>
    `
}

export default LandmarkComponent