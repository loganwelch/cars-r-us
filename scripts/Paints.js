import { setPaintChoice } from "./TransientState.js"


const handlePaintChoice = (changeEvent) => {
    if (changeEvent.target.id === "paint") {
        setPaintChoice(parseInt(changeEvent.target.value))
    }
}


export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paints")
    const paints = await response.json()

    document.addEventListener("change", handlePaintChoice)

    let paintsHTML = `<select id="paint">
                        <option value='0'>Select paint color</option>`

    const divStringArray = paints.map(

        (paint) => {
            return `
                    <option value='${paint.id}'>${paint.color}</option>
                    `
        }
    )


    paintsHTML += divStringArray.join("")
    paintsHTML += "</select>"
    return paintsHTML
}








// let divStringArray = paints.map(
//     (paint) => {
//         `<option value="${paint.id}">${paint.color}</option>`

//         }
// )