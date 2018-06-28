import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable'

import BasicProp from './props/BasicProp'
import NumericProp from './props/NumericProp'
import BooleanProp from './props/BooleanProp'
import ArrayProp from './props/ArrayProp'
class NanoRedux {

    constructor(storeName=null)
    {
        this.storeName = storeName
        this._state = {}
        this._reducers = {}

        this.init()
        for(let propName in this)
        {
            var prop = this[propName]
            if(prop && prop.__isProp){
                //add to state
                this._state[propName] = prop.initialValue

                //add reducers
                let reducers = prop._createReducers(propName)
                for(let actionName in reducers){
                    let action = [actionName]
                    this._reducers[action] = reducers[actionName]
                }

                prop._createSelector(this.storeName,propName)
            }
        }

        this.initialState = Immutable(this._state)
        this.reducers = createReducer(this._reducers,this.initialState)  
    }


    createCustomAction(actionName,reducer)
    {
        let action = createAction(actionName)
        this._reducers[action] = reducer
        return action
    }

    createCustomSelector(func)
    {
        return createSelector(func,(_)=>_)
    }



    getReducers()
    {
        return this.reducers
    }
}

export {NanoRedux as default}
export {BasicProp,NumericProp,BooleanProp,ArrayProp}