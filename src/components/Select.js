import { useState, useEffect } from "react"

import "./select.css"

function Select(props) {
    const [page, setPage] = useState(0)
    const { evidences, change, found, index, value } = props
    const [currentEvidence, setCurrentEvidence] = useState(value)
    const arrSize = evidences.length;

    useEffect(() => {
        setCurrentEvidence(evidences[page])
    }, [page])

    useEffect(() => {
        const newFound = [...found]

        newFound[index] = currentEvidence;

        change(newFound)
    }, [currentEvidence])

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
            <input type="text" value={value} readOnly />
            <button onClick={() => handleClick("next")}>&gt;</button>
        </div>
    )
}

export default Select