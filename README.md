# nano-redux
A lightweight helper for redux

# how to use
```
import NanoRedux from 'nano-redux'

const nanoRedux = new NanoRedux()
nanoRedux
    .add('userName','')
    .addBoolean('logged',false)
    .addNumeric('accountLike',0)
    .finalize()

export const videoActions = reduxFactory.getActions()
export const videoSelectors = reduxFactory.getSelectors()
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



