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