
const eventHub = document.querySelector(".container")

export const attractionHTML = (attractionObj) => {
    return `
        <div id = "attraction-${attractionObj.id}" class = "attraction__card">
        <h3>${attractionObj.name}</h3>
        
        <button  id = "attraction--${attractionObj.id}"> Details: </button>
        </div>
    `  
}



eventHub.addEventListener("click", (eventObj) => {
    const [nameofId, attractionId] = eventObj.target.id.split("--")
    if (eventObj.target.id.startsWith("attraction--")) {
        const newEvent = new CustomEvent("attractionButtonClicked", {
            detail: {
                attractionId: attractionId
            }
        })
        eventHub.dispatchEvent(newEvent)
    }
})
