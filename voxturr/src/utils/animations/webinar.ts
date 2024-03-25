import { Variants, spring } from "framer-motion"


export const webinarHeroBannerImageVarient={
   hidden: {
      opacity:0,
      x:100,
   },
 show:{
    opacity: 1,
    x:0,
    transition: {
      type:"spring",
      stiffness:100,
      duration: 0.4,
      delay: 1.2,
    },
 }
}

export const webinarChartVarient:Variants={
   hidden: {
      opacity:1,
      y:-5,
   },
 show:{
    opacity: 1,
    y:5,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
 }
}

export const webinarTrendUpVarient:Variants={
   hidden: {
      opacity:1,
      y:-5,
   },
 show:{
    opacity: 1,
    y:5,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
 }
}

export const webinarScriptWritingVarient:Variants={
   hidden: {
      opacity:1,
      y:-5,
   },
 show:{
    opacity: 1,
    x:5,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },

 }
}


export const webinarEditVarient:Variants={
   hidden: {
      opacity:1,
      y:-5,
   },
 show:{
    opacity: 1,
    x:5,
    transition: { duration: 2, repeat: Infinity,  repeatType: "reverse", delay:2 },
 }
}
