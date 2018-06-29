# nano-redux
NanoRedux is a lightweight helper for Redux. It can be used for small stores with simple interractions. You have just to create a class extending NanoRedux and initialize your props in the init method. Each prop initialized is a value in the state. You have many types of props : BasicProp, NumericProp, BooleanProp, ArrayProp. This types provide a set of actions/reducers for each props.

NanoRedux is not for deep and complex state manipulation. The best way is to separate your stores in different files and combine them with [combineReducers](https://redux.js.org/api-reference/combinereducers). With this method you can mix NanoRedux with classic stores
## How to install
With npm

```
npm install nano-redux
```
With yarn
```
yarn add nano-redux
```
## How to use
Create a class extending NanoRedux and define your props in the init method
```
import NanoRedux from 'nano-redux'
import {BasicProp,NumericProp,BooleanProp,ArrayProp} from 'nano-redux'

class UserRedux extends NanoRedux {

    init()
    {
        this.userName  = new BasicProp('no-username')
        this.like       = new NumericProp(10)
        this.logged   = new BooleanProp(false)
        this.friends    = new ArrayProp(["friend 1","friend 2","friend 3"])

        this.doubleLike = this.createCustomAction('doubleLike',state => state.merge({like:state.like*2}))
        this.lastFriend = this.createCustomSelector(state => state.friends[state.friends.length-1])
    }
}

export default new UserRedux()
```

If you are using [combineReducers](https://redux.js.org/api-reference/combinereducers), you can name your NanoRedux in the constructor
```
export default new UserRedux('user')
```
Add your store to the provider
```
import React, { Component } from 'react';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import userRedux from './redux/UserRedux'
import Home from './containers/Home'

const store = createStore(userRedux.getReducers())

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <div>
        <Home />
       </div>
      
      </div>
      </Provider>
    );
  }
}

export default App

```

In your component, map actions and state like this :
```
import userRedux from './../redux/UserRedux'
import {connect} from 'react-redux'



const mapStateToProps = (state) => ({
    userName:userRedux.userName.getValue(state),
    like:userRedux.like.getValue(state),
    logged:userRedux.logged.getValue(state),
})
  
const mapActions = (dispatch) => ({
    setUserName:(userName)=> dispatch(userRedux.userName.setValue(userName)),
    resetUserName:()=>dispatch(userRedux.userName.reset()),
    incLike:()=>dispatch(userRedux.like.inc()),
    descLike:()=>dispatch(userRedux.like.desc()),
    enableLogged:()=>dispatch(userRedux.logged.enable()),
    resetLogged:()=>dispatch(userRedux.logged.reset()),
    addToFriends:(name)=>dispatch(userRedux.friends.push(name)),
    removeLastFriend:()=>dispatch(userRedux.friends.removeLast()),
})

export default connect(mapStateToProps, mapActions)(Home)
```

## API 
### BasicProp 
```
myBasicProp = new BasicProp(initialValue=null)
```

| Method  | Description  |
|---|---|
| setValue(newValue)  | replace the state value |
| reset()  | set initial value as new value |
| getValue(state)  | return the current value |

### NumericProp 
```
myNumericProp = new NumericProp(initialValue=0)
```

| Method  | Description  |
|---|---|
| setValue(newValue)  | replace the state value |
| reset()  | set initial value as new value |
| inc()  | add 1 to the current value |
| desc()  | remove 1 to the current value |
| add(value)  | add value to the current value |
| getValue(state)  | return the current value |

### BooleanProp 
```
myBooleanProp = new BooleanProp(initialValue=false)
```

| Method  | Description  |
|---|---|
| setValue(newValue)  | replace the state value |
| reset()  | set initial value as new value |
| enable()  | set the value to true |
| disable()  | set the value to false |
| toggle()  | toggle true/false the current value |
| getValue(state)  | return the current value |

### ArrayProp 
```
myArrayProp = new ArrayProp(initialValue=[])
```

| Method  | Description  |
|---|---|
| setValue(newValue)  | replace the state value |
| reset()  | set initial value as new value |
| push(value)  | push value in the array |
| removeAt(index)  | remove value at index |
| removeFirst()  | remove the first value |
| removeLast()  | remove the last value |
| getValue(state)  | return the current value |
