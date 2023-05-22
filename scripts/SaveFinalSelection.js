import { saveOptionChoices } from "./TransientState.js"

const handleOptionChoicesClick = (clickEvent) => {
    if (clickEvent.target.id === "saveOptions") {
        saveOptionChoices()
    }
}

export const SaveOptions = () => {
    document.addEventListener("click", handleOptionChoicesClick)

    return "<div><button id='saveOptions'>Save Final Selections</button></div>"
}