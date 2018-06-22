# nano-redux
A lightweight helper for redux

# How to use
```
import NanoRedux from 'nano-redux'

const nanoRedux = new NanoRedux()
nanoRedux
    .add('userName','')
    .addBoolean('logged',false)
    .addNumeric('accountLike',0)
    .finalize()

export const userActions = reduxFactory.getActions()
export const userSelectors = reduxFactory.getSelectors()
export default reduxFactory.getReducers()
```

If you are using combineReducers, you can name your NanoRedux in the constructor

```
const nanoRedux = new NanoRedux('user')
```

If you want to add custom fields in the initial state you can use this method :

```
nanoRedux.addState('metaData',{age:0,friends:[]})
```

You can also add custom action like this :

```
const setMetaAge = (state,value) => Immutable.setIn(state, ['meta', 'age'],value);
nanoRedux.addAction('setMetaAge',setMetaAge)
```

# Actions generated

nanoRedux.add(propName,initialValue)
    - setPropName(newValue)
    - resetPropName()

nanoRedux.addBoolean(propName,initialValue)
    - setPropName(newValue)
    - resetPropName()
    - togglePropName()
    - disablePropName()
    - enablePropName()

nanoRedux.addNumeric(propName,initialValue)
    - setPropName(newValue)
    - resetPropName()
    - incPropName()
    - descPropName()
    - addPropName(addValue)





