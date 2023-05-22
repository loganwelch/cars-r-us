// Set up the transient state data structure and provide initial values
const transientState = {
    "paintId": 0,
    "interiorId": 0,
    "technologieId": 0,
    "wheelId": 0
}


// Functions to modify each property of transient state
export const setPaintChoice = (chosenPaint) => {
    transientState.paintId = chosenPaint
    console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
    transientState.interiorId = chosenInterior
    console.log(transientState)
}

export const setTechnologyChoice = (chosenTechnology) => {
    transientState.technologieId = chosenTechnology
    console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
    transientState.wheelId = chosenWheel
    console.log(transientState)
}



// Function to convert transient state to permanent state
export const saveOptionChoices = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    const response = await fetch("http://localhost:8088/options", postOptions)

    const customEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(customEvent)
}