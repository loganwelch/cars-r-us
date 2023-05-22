import { SelectionList } from "./FinalSelection.js"
import { InteriorOptions } from "./Interiors.js"
import { PaintOptions } from "./Paints.js"
import { SaveOptions } from "./SaveFinalSelection.js"
import { TechnologyOptions } from "./Technologies.js"
import { WheelOptions } from "./Wheels.js"


const container = document.querySelector("#container")

const render = async () => {
    const paintsHTML = await PaintOptions()
    const interiorsHTML = await InteriorOptions()
    const technologyHTML = await TechnologyOptions()
    const wheelsHTML = await WheelOptions()
    const buttonHTML = await SaveOptions()
    const selectionListHTML = await SelectionList()

    const composedHTML = `
        <h1>Cars-R-Us</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h1>What paint color do you most desire?</h1>
                ${paintsHTML}
            </section>

            <section class="choices__sizes options">
                <h1>Which interior finish calls to you?</h1>
                ${interiorsHTML}
            </section>

            <section class="choices__styles options">
                <h1>Which technology upgrade do you secretly long for??</h1>
                ${technologyHTML}
            </section>

            <section class="choices__styles options">
                <h1>Which wheel type is your deepest desire?</h1>
                ${wheelsHTML}
            </section>
        </article>

        <article class="finalizeSelections">
            ${buttonHTML}
        </article>

        <article class="finalSelections">
            <h2>Final Selections</h2>
            ${selectionListHTML}
        </article>
    `

    container.innerHTML = composedHTML
}

render()



document.addEventListener("newOrderCreated", event => {
    console.log("State of data has changed. Regenerating HTML...")
    render()
})