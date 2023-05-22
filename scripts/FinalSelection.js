export const SelectionList = async () => {
    // Get the submissions from my API
    const response = await fetch("http://localhost:8088/options?_expand=paint&_expand=interior&_expand=technologie&_expand=wheel")
    const options = await response.json()

    // Iterate the final selections options and create some representations
    let selectionsHTML = ""

    // us map() to generate a new array of strings
    const divStringArray = options.map(
        (option) => {
            const optionPrice = option.paint.price + option.interior.price + option.technologie.price + option.wheel.price
            return `<div>
                Final Selections #${option.id} costs ${optionPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "USD"
            })}
                </div>`
        }
    )
    selectionsHTML += divStringArray.join("")

    return selectionsHTML
}
    // for (const option of options) {
    //     selectionsHTML += `<section class="selections">
    //                     <div>Paint color? ${option.paintColorId}</div>
    //                     <div>Interior finish? ${option.interiorId}</div>
    //                     <div>Technology upgrade? ${option.technologyId}</div>
    //                     <div>Wheel type? ${option.wheelId}</div>
    //     </section>`
    // }

    // // Return the HTML string
    // return selectionsHTML