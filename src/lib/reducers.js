import Immutable from 'seamless-immutable'

//common
export const basicMerge = (propName) => (state,value)=>state.merge({[propName]:value})
export const reset = (propName,startValue) => (state)=>state.merge({[propName]:startValue})

//boolean
export const toggleBoolean = (propName) => (state)=>state.merge({[propName]:!state[propName]})
export const disableBoolean = (propName) => (state)=>state.merge({[propName]:false})
export const enableBoolean = (propName) => (state)=>state.merge({[propName]:true})

//numeric
export const incNumeric = (propName) => (state)=>state.merge({[propName]:state[propName]+1})
export const descNumeric = (propName) => (state)=>state.merge({[propName]:state[propName]-1})
export const addNumeric = (propName) => (state,value)=>state.merge({[propName]:state[propName]+value})

export const addArray = (propName) => (state,value)=>state.updateIn([propName], arr => arr.concat([value]));
export const removeArrayAt = (propName) => (state,index)=> state.updateIn([propName], arr =>arr.slice(0, index).concat(arr.slice(index+1)));
export const removeArrayFirst = (propName) =>(state) => state.updateIn([propName],arr=>arr.slice(1))
export const removeArrayLast = (propName) =>(state) => state.updateIn([propName],arr=>arr.slice(0,arr.length-1))