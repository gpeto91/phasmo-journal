import { useState, useEffect } from "react"

import "./select.css"

function SelectGhost(props) {
    const [page, setPage] = useState(0)
    const { changeGhost, ghosts, value } = props
    const [currentGhost, setCurrentGhost] = useState(value)
    const arrSize = ghosts.length


    useEffect(() => {
        setCurrentGhost(ghosts[page])
    }, [page])


    /* useEffect(() => {
        changeGhost(currentGhost)
    }, [currentGhost]) */

    useEffect(() => {
        setCurrentGhost(value)
    }, [value])

    const handleClick = state => {
        if (state === "prev") {
            setPage(page - 1)
            if (page <= 0) setPage(arrSize - 1);
        } else if (state === "next") {
            setPage(page + 1)
            if (page >= arrSize - 1) setPage(0)
        }
    }

    return (
        <div className="select">
            <button onClick={() => handleClick("prev")}>&lt;</button>
            <input type="text" value={ currentGhost.name } readOnly />
            <button onClick={() => handleClick("next")}>&gt;</button>
        </div>
    )
}

export default SelectGhost