import { Variants } from "framer-motion"

export const stageControlerVarient={
    hidden: { opacity: 0, x: -100 },
    show:{
        opacity: 1, x:0 ,
        transition: {
            duration: 0.5
        }
    }
}

export const stageHackingCardVarient={
    hidden:{
        opacity: 0,
        y:30
    },
    show: {
        opacity:1,
        y:0,
        transition:{
            duration:0.2
        }
    },
    exit:{
        opacity: 0, y:-30
    }
}

export const growthScriptWritingVarient:Variants={
     hidden: { opacity: 1, x: -5 },
    show:{
        opacity: 1, x:5 ,
        transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2.2 },

    }
}

export const growthTrendUpVarient:Variants={
     hidden: { opacity: 1, y: -5},
    show:{
        rotateZ: -20,
        opacity: 1, y:5 ,
        transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2.2 },
    }
}