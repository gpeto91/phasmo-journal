import { useState, useEffect } from "react"
import usePortal from "react-cool-portal";
import { ghosts } from "../data/ghosts";

import "./ghost.css"

function Ghost(props) {
    const { name, strength, weakness, evidences, found } = props
    const { Portal, show, hide } = usePortal({
        defaultShow: false,
        containerId: "modal"
    })
    const [state, setState] = useState("")

    useEffect(() => {
        const hasFound = found.filter(ghost => ghost.name === name)

        if (hasFound.length) {
            setState("found")
        } else if(found.length > 1) {
            setState("notfound")
        } else {
            setState("")
        }
    }, [found])

    return (
        <>
            <div className={`ghost-tag ${state}`} onClick={show}>{name}</div>

            <Portal>
                <div className="modal">
                    <h1>{name}</h1>

                    <h3>Strength</h3>
                    <p>{strength}</p>
                    <hr />

                    <h3>Weakness</h3>
                    <p>{weakness}</p>
                    <hr />

                    <h3>Evidences</h3>
                    <p>{evidences.join(", ")}</p>

                    <button onClick={hide}>Close</button>
                </div>
            </Portal>
        </>
    )
}

export default Ghost