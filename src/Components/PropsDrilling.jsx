import { createContext } from "react"

// Props Drilling Example
// const A = () =>  <h3>Hello This is A Component  <B color={'red'} /></h3>
// const B = ({color}) =>  <h3>Hello This is B Component  <C color={color}/></h3>
// const C = ({color}) =>  <h3>Hello This is C Component  <D color={color}/></h3>
// const D = ({color}) =>  <h3>Hello This is D Component  <E color={'red'}/></h3>
// const E = ({color}) =>  <h3>Hello This is E Component  {color}</h3>



// Solved By context Hook 


const ColorContext  = createContext()
const color  =  'red'

const A = () => <ColorContext.Provider value={color}><h3>Hello This is A Component  <B/></h3></ColorContext.Provider>
const B = () =>  <h3>Hello This is B Component  <C/></h3>
const C = () =>  <h3>Hello This is C Component {color}<D/></h3>
const D = () =>  <h3>Hello This is D Component  <E /></h3>
const E = () =>  <h3>Hello This is E Component {color} </h3>


export default A;