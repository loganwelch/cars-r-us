import { setTechnologyChoice } from "./TransientState.js"


const handleTechnologyChoice = (changeEvent) => {
    if (changeEvent.target.id === "technology") {
        setTechnologyChoice(parseInt(changeEvent.target.value))
    }
}


export const TechnologyOptions = async () => {
    const response = await fetch("http://localhost:8088/technologies")
    const technology = await response.json()

    document.addEventListener("change", handleTechnologyChoice)

    let technologyHTML = `<select id="technology">
                            <option value='0'>Select technology upgrade</option>`


    const divStringArray = technology.map(

        (technolog) => {
            return `
                    <option value='${technolog.id}'>${technolog.package}</option>
                    `
        }
    )


    technologyHTML += divStringArray.join("")
    technologyHTML += "</select>"
    return technologyHTML
}