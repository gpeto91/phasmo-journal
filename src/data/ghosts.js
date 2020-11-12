const EMF = "EMF Level 5"
const SPIRIT = "Spirit Box"
const PRINTS = "Fingerprints"
const ORB = "Ghost Orb"
const WRITING = "Ghost Writing"
const TEMP = "Freezing Temperatures"

const PT_EMF = "EMF Nível 5"
const PT_SPIRIT = "Spirit Box"
const PT_PRINTS = "Impressão Digital"
const PT_ORB = "Orbe Fantasma"
const PT_WRITING = "Escrita Fantasma"
const PT_TEMP = "Temperatura Baixa"

/* export const ghosts = {
    "pt-BR": [
        {
            name: "Espírito",
            strength: "Nenhum",
            weakness: "Usar incenso num Espírito irá impedi-lo de atacar por um longe período",
            evidence: [
                PT_SPIRIT,
                PT_PRINTS,
                PT_WRITING
            ]
        },
        {
            name: "Wraith",
            strength: "Wraiths quase nunca tocam o chão, portanto não podem ser rastreados por pegadas",
            weakness: "Wraiths possuem reação tóxica ao Sal",
            evidence: [
                PT_PRINTS,
                PT_TEMP,
                PT_SPIRIT
            ]
        },
        {
            name: "Phantom",
            strength: "Ao olhar para um Phantom irá diminuir sua sanidade consideravelmente",
            weakness: "Tirar uma foto de um Phantom fará com que ele desapareça temporariamente",
            evidence: [
                PT_EMF,
                PT_ORB,
                PT_TEMP
            ]
        },
        {
            name: "Poltergeist",
            strength: "Um Poltergeist pode arremessar grandes quantidades de objetos de uma só vez",
            weakness: "Um Poltergeist é quase ineficaz em uma sala vazia",
            evidence: [
                PT_SPIRIT,
                PT_PRINTS,
                PT_ORB
            ]
        },
        {
            name: "Banshee",
            strength: "Um Banshee terá apenas uma pessoa como alvo por vez",
            weakness: "Banshees temem o Crucifixo e serão menos agressivos quando perto de um",
            evidence: [
                PT_EMF,
                PT_PRINTS,
                PT_TEMP
            ]
        },
        {
            name: "Jinn",
            strength: "Um Jinn irá andar numa velocidade maior se a vítima estiver longe",
            weakness: "Desligar a fonte de energia da localidade irá empedi-lo de usar sua habilidade",
            evidence: [
                PT_SPIRIT,
                PT_ORB,
                PT_EMF
            ]
        },
        {
            name: "Mare",
            strength: "Um Mare terá uma chance maior de atacar no escuro",
            weakness: "Acender as luzes perto do Mare irá diminuir sua chance de atacar",
            evidence: [
                PT_SPIRIT,
                PT_ORB,
                PT_TEMP
            ]
        },
        {
            name: "Revenant",
            strength: "Um Revenant irá andar significamente mais rápido enquanto estiver caçando uma vítima",
            weakness: "Esconder de um Revenant ferá com que ande muito lentamente",
            evidence: [
                PT_EMF,
                PT_PRINTS,
                PT_WRITING
            ]
        },
        {
            name: "Assombração",
            strength: "Sendo tímido, o Fantasma será mais difícil de encontrar",
            weakness: "O Fantasma não entrará no modo de caça se tiver muitas pessoas perto",
            evidence: [
                PT_EMF,
                PT_ORB,
                PT_WRITING
            ]
        },
        {
            name: "Demônio",
            strength: "Demônios irão atacar com mais frequência do que qualquer outro Fantasma",
            weakness: "Ser respondido com sucesso no Tabuleiro Oujia não irá diminuir sua sanidade",
            evidence: [
                PT_SPIRIT,
                PT_WRITING,
                PT_TEMP
            ]
        },
        {
            name: "Yurei",
            strength: "Yureis são conhecidos por terem fortes efeitos na sanidade das pessoas",
            weakness: "Acender incenso na sala do Yurei irá impedi-lo de andar ao redor do local por muito tempo",
            evidence: [
                PT_ORB,
                PT_WRITING,
                PT_TEMP
            ]
        },
        {
            name: "Oni",
            strength: "Oni são mais ativos quando há pessoas próximas e são vistos movendo objetos em grande velocidade",
            weakness: "Ser mais ativo faz do Oni mais fácil de encontrar e identificar",
            evidence: [
                PT_EMF,
                PT_SPIRIT,
                PT_WRITING
            ]
        }
    ],
    "en": [
        {
            name: "Spirit",
            strength: "None",
            weakness: "Using smudge sticks on a Spirit will stop it attacking for a long period of time",
            evidence: [
                SPIRIT,
                PRINTS,
                WRITING
            ]
        },
        {
            name: "Wraith",
            strength: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps",
            weakness: "Wraiths have a toxic reaction to Salt",
            evidence: [
                PRINTS,
                TEMP,
                SPIRIT
            ]
        },
        {
            name: "Phantom",
            strength: "Looking at a Phantom will considerably drop your sanity",
            weakness: "Taking a photo of the Phantom will make it temporarily disappear",
            evidence: [
                EMF,
                ORB,
                TEMP
            ]
        },
        {
            name: "Poltergeist",
            strength: "A Poltergeist can throw huge amounts of objects at once",
            weakness: "A Poltergeist is almost ineffective in a empty room",
            evidence: [
                SPIRIT,
                PRINTS,
                ORB
            ]
        },
        {
            name: "Banshee",
            strength: "A Banshee will only target one person at a time",
            weakness: "Banshees fear the Crucifix and will be less aggressive when near one",
            evidence: [
                EMF,
                PRINTS,
                TEMP
            ]
        },
        {
            name: "Jinn",
            strength: "A Jinn will travel at a faster speed if it's victim is far away",
            weakness: "Turning off the locations power source will prevent the Jinn from using it's ability",
            evidence: [
                SPIRIT,
                ORB,
                EMF
            ]
        },
        {
            name: "Mare",
            strength: "A Mare will have an increased chance to attack in the dark",
            weakness: "Turning the lights on around the Mare will lower it's chance to attack",
            evidence: [
                SPIRIT,
                ORB,
                TEMP
            ]
        },
        {
            name: "Revenant",
            strength: "A Revenant will travel at a significantly faster speed when hunting a victim",
            weakness: "Hiding from the Revenant will cause it to move very slowly",
            evidence: [
                EMF,
                PRINTS,
                WRITING
            ]
        },
        {
            name: "Shade",
            strength: "Being shy means the ghost will be harder to find",
            weakness: "The Ghost will not enter hunting mode if there are multiply people nearby",
            evidence: [
                EMF,
                ORB,
                WRITING
            ]
        },
        {
            name: "Demon",
            strength: "Demons will attack more often than any other Ghost",
            weakness: "Asking a Demon successful questions on the Ouija Board won't lower the users sanity",
            evidence: [
                SPIRIT,
                WRITING,
                TEMP
            ]
        },
        {
            name: "Yurei",
            strength: "Yurei's have been known to have stronger effect on people's sanity",
            weakness: "Smudging the Yurei's room will cause it to not wander around the location for a long time",
            evidence: [
                ORB,
                WRITING,
                TEMP
            ]
        },
        {
            name: "Oni",
            strength: "Oni's are more active when people are nearby and have been seen moving objects at great speed",
            weakness: "Being more active will make the Oni easier to find and identify",
            evidence: [
                EMF,
                SPIRIT,
                WRITING
            ]
        }
    ]
} */

export const ghosts = [
    {
        name: "Spirit",
        strength: "None",
        weakness: "Using smudge sticks on a Spirit will stop it attacking for a long period of time",
        evidence: [
            SPIRIT,
            PRINTS,
            WRITING
        ]
    },
    {
        name: "Wraith",
        strength: "Wraiths almost never touch the ground meaning it can't be tracked by footsteps",
        weakness: "Wraiths have a toxic reaction to Salt",
        evidence: [
            PRINTS,
            TEMP,
            SPIRIT
        ]
    },
    {
        name: "Phantom",
        strength: "Looking at a Phantom will considerably drop your sanity",
        weakness: "Taking a photo of the Phantom will make it temporarily disappear",
        evidence: [
            EMF,
            ORB,
            TEMP
        ]
    },
    {
        name: "Poltergeist",
        strength: "A Poltergeist can throw huge amounts of objects at once",
        weakness: "A Poltergeist is almost ineffective in a empty room",
        evidence: [
            SPIRIT,
            PRINTS,
            ORB
        ]
    },
    {
        name: "Banshee",
        strength: "A Banshee will only target one person at a time",
        weakness: "Banshees fear the Crucifix and will be less aggressive when near one",
        evidence: [
            EMF,
            PRINTS,
            TEMP
        ]
    },
    {
        name: "Jinn",
        strength: "A Jinn will travel at a faster speed if it's victim is far away",
        weakness: "Turning off the locations power source will prevent the Jinn from using it's ability",
        evidence: [
            SPIRIT,
            ORB,
            EMF
        ]
    },
    {
        name: "Mare",
        strength: "A Mare will have an increased chance to attack in the dark",
        weakness: "Turning the lights on around the Mare will lower it's chance to attack",
        evidence: [
            SPIRIT,
            ORB,
            TEMP
        ]
    },
    {
        name: "Revenant",
        strength: "A Revenant will travel at a significantly faster speed when hunting a victim",
        weakness: "Hiding from the Revenant will cause it to move very slowly",
        evidence: [
            EMF,
            PRINTS,
            WRITING
        ]
    },
    {
        name: "Shade",
        strength: "Being shy means the ghost will be harder to find",
        weakness: "The Ghost will not enter hunting mode if there are multiply people nearby",
        evidence: [
            EMF,
            ORB,
            WRITING
        ]
    },
    {
        name: "Demon",
        strength: "Demons will attack more often than any other Ghost",
        weakness: "Asking a Demon successful questions on the Ouija Board won't lower the users sanity",
        evidence: [
            SPIRIT,
            WRITING,
            TEMP
        ]
    },
    {
        name: "Yurei",
        strength: "Yurei's have been known to have stronger effect on people's sanity",
        weakness: "Smudging the Yurei's room will cause it to not wander around the location for a long time",
        evidence: [
            ORB,
            WRITING,
            TEMP
        ]
    },
    {
        name: "Oni",
        strength: "Oni's are more active when people are nearby and have been seen moving objects at great speed",
        weakness: "Being more active will make the Oni easier to find and identify",
        evidence: [
            EMF,
            SPIRIT,
            WRITING
        ]
    }
]