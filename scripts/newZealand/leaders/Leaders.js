const LeadersComponent = (leader) => {
    return `
        <div class="leader__name">${leader.leader}</div>
        <div class="leader__reign">${leader.reign}</div>
   `
}

export default LeadersComponent