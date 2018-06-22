import { createAction, createReducer } from 'redux-act'
import { createSelector } from 'reselect';
import Immutable from 'seamless-immutable'

import prefix from './lib/prefix'
import * as reducers from './lib/reducers'

export default class NanoRedux {


    constructor(storeName=null)
    {
        this.storeName = storeName
        this._state = {}
        this._actions = {}
        this._reducers = {}
        this._selectors = {}
    }


    addBoolean(propName,startValue=false)
    {
        this.addState(propName,startValue)
        this.addAction(prefix('set',propName),reducers.basicMerge(propName))
        this.addAction(prefix('reset',propName),reducers.reset(propName,startValue))
        this.addAction(prefix('toggle',propName),reducers.toggleBoolean(propName))
        this.addAction(prefix('disable',propName),reducers.disableBoolean(propName))
        this.addAction(prefix('enable',propName),reducers.enableBoolean(propName))
        return this
    }

    add(propName,startValue=null){
        this.addState(propName,startValue)
        this.addAction(prefix('set',propName),reducers.basicMerge(propName))
        this.addAction(prefix('reset',propName),reducers.reset(propName,startValue))
        return this
    }

    addNumeric(propName,startValue=0){
        this.addState(propName,startValue)
        this.addAction(prefix('set',propName),reducers.basicMerge(propName))
        this.addAction(prefix('reset',propName),reducers.reset(propName,startValue))
        this.addAction(prefix('inc',propName),reducers.incNumeric(propName))
        this.addAction(prefix('desc',propName),reducers.descNumeric(propName))
        this.addAction(prefix('add',propName),reducers.addNumeric(propName))
        return this
    }

    addState(propName,startValue)
    {
        this._state[propName] = startValue
        if(this.storeName) this._selectors[propName] = createSelector(state => state[this.storeName][propName],(_)=>_)
        else this._selectors[propName] = createSelector(state => state[propName],(_)=>_)
        return this
    }

    addAction(actionName,reducer){
        this._actions[actionName] = createAction(actionName)
        this._reducers[this._actions[actionName]] = reducer
        return this
    }


    
    finalize(){
        this.initialState = Immutable(this._state)
        this.reducers = createReducer(this._reducers,this.initialState)      
    }


    getInitialState()
    {
        return this.initialState
    }

    getActions()
    {
        return this._actions
    }

    getReducers()
    {
        return this.reducers
    }

    getSelectors()
    {
        return this._selectors
    }



}