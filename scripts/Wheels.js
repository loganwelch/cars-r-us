import { setWheelChoice } from "./TransientState.js"


const handleWheelChoice = (changeEvent) => {
    if (changeEvent.target.id === "wheel") {
        setWheelChoice(parseInt(changeEvent.target.value))
    }
}

export const WheelOptions = async () => {
    const response = await fetch("http://localhost:8088/wheels")
    const wheels = await response.json()

    document.addEventListener("change", handleWheelChoice)

    let wheelsHTML = `<select id="wheel">
                        <option value='0'>Select wheel type</option>`

    const divStringArray = wheels.map(

        (wheel) => {
            return `
                    <option value='${wheel.id}'>${wheel.type}</option>
                    `
        }
    )


    wheelsHTML += divStringArray.join("")
    wheelsHTML += "</select>"
    return wheelsHTML
}