import { useState, useEffect } from "react"
import Select from "./components/Select"
import SelectGhost from "./components/SelectGhost"
import Ghost from "./components/Ghost"

import { ghosts } from "./data/ghosts"

import "./app.css"

function App() {
  const NULL = "No Evidence"
  const EMF = "EMF Level 5"
  const SPIRIT = "Spirit Box"
  const PRINTS = "Fingerprints"
  const ORB = "Ghost Orb"
  const WRITING = "Ghost Writing"
  const TEMP = "Freezing Temperatures"

  /* const PT_NULL = "Sem Evidência"
  const PT_EMF = "EMF Nível 5"
  const PT_SPIRIT = "Spirit Box"
  const PT_PRINTS = "Impressão Digital"
  const PT_ORB = "Orbe Fantasma"
  const PT_WRITING = "Escrita Fantasma"
  const PT_TEMP = "Temperatura Baixa" */

  const evidences = [
    NULL,
    EMF,
    SPIRIT,
    PRINTS,
    ORB,
    WRITING,
    TEMP
  ]

  const [currEvidence, setCurrEvidence] = useState([NULL, NULL, NULL])
  const [foundGhost, setFoundGhost] = useState([{ name: "None Selected" }])
  const [currGhost, setCurrGhost] = useState(foundGhost[0])
  const [lookingFor, setLookingFor] = useState([])
  /* const [lang, setLang] = useState("")
  const [ghosts, setGhosts] = useState([])
  const [evidences, setEvidences] = useState([]) */

  const reset = () => {
    setCurrEvidence([NULL, NULL, NULL])
    setFoundGhost([{ name: "None Selected" }])
  }

  /* useEffect(() => {
    let lang = navigator.language

    if (lang !== "pt-BR") lang = "en"

    setLang(lang)

    setGhosts(ghostsData[lang])

    if (lang === "pt-BR") {
      setEvidences([
        PT_NULL,
        PT_EMF,
        PT_SPIRIT,
        PT_PRINTS,
        PT_ORB,
        PT_WRITING,
        PT_TEMP
      ])
    } else {
      setEvidences([
        NULL,
        EMF,
        SPIRIT,
        PRINTS,
        ORB,
        WRITING,
        TEMP
      ])
    }
  }, []) */

  useEffect(() => {
    const newFoundGhosts = ghosts.filter(ghost => {
      let count = 0
      const realEvidence = currEvidence.filter(evidence => evidence !== NULL)

      for (let i = 0; i < realEvidence.length; i++) {
        if (ghost.evidence.indexOf(realEvidence[i]) !== -1) count++
      }

      if (count === realEvidence.length && count > 0) return ghost
    })

    setFoundGhost([{ name: "None Selected" }, ...newFoundGhosts])
    setCurrGhost({ name: "None Selected" })
  }, [currEvidence])

  useEffect(() => {
    const newLookingFor = foundGhost.map(ghost => {
      if (ghost.evidence) {
        return ghost.evidence.filter(evidence => currEvidence.indexOf(evidence) === -1)
      }
    })
      .filter(evidence => evidence !== undefined)
      .flat()
      .filter((val, index, self) => self.indexOf(val) === index)

    if (!currEvidence.filter(evidence => evidence !== NULL).length) {
      setLookingFor([])
    } else if (!newLookingFor.length && currEvidence.filter(evidence => evidence !== NULL).length === 3) {
      let count = 0
      const evidences = currEvidence.filter(evidence => evidence !== NULL)

      foundGhost.map(ghost => {
        for (let i = 0; i < evidences.length; i++) {
          if (ghost.evidence) {
            if (ghost.evidence.indexOf(evidences[i]) !== -1) count++
          }
        }
      })

      if (count === 3) setLookingFor(["nothing"])
    } else if (newLookingFor.length) {
      setLookingFor(newLookingFor)
    }
  }, [foundGhost])

  return (
    <div className="wrapper">
      <div className="ghost-wrapper">
        {ghosts.map(ghost => (
          <Ghost
            key={ghost.name}
            evidences={ghost.evidence}
            strength={ghost.strength}
            weakness={ghost.weakness}
            name={ghost.name}
            found={foundGhost}
          />
        ))}
      </div>
      <div className="evidenceWrapper">
        <Select
          evidences={evidences}
          change={value => setCurrEvidence(value)}
          changeGhost={value => setCurrGhost(value)}
          found={currEvidence}
          index={0}
          value={currEvidence[0]}
        />

        <Select
          evidences={evidences}
          change={value => setCurrEvidence(value)}
          changeGhost={value => setCurrGhost(value)}
          found={currEvidence}
          index={1}
          value={currEvidence[1]}
        />

        <Select
          evidences={evidences}
          change={value => setCurrEvidence(value)}
          changeGhost={value => setCurrGhost(value)}
          found={currEvidence}
          index={2}
          value={currEvidence[2]}
        />

        <SelectGhost
          ghosts={foundGhost}
          changeGhost={value => setCurrGhost(value)}
          value={currGhost}
        />

        <p className="lookingForText">You're looking for: {lookingFor.length ? lookingFor.flat().join(", ") : "everything"}</p>
      </div>

      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
