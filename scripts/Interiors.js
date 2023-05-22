import { setInteriorChoice } from "./TransientState.js"


const handleInteriorChoice = (changeEvent) => {
    if (changeEvent.target.id === "interior") {
        setInteriorChoice(parseInt(changeEvent.target.value))
    }
}


export const InteriorOptions = async () => {
    const response = await fetch("http://localhost:8088/interiors")
    const interiors = await response.json()

    document.addEventListener("change", handleInteriorChoice)

    let interiorsHTML = `<select id="interior">
                            <option value='0'>Select interior finish</option>`

    const divStringArray = interiors.map(

        (interior) => {
            return `
                    <option value='${interior.id}'>${interior.finish}</option>
                    `
        }
    )


    interiorsHTML += divStringArray.join("")
    interiorsHTML += "</select>"
    return interiorsHTML
}