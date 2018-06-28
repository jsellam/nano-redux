import { createSelector } from 'reselect';
export default class AbstractProp {

    constructor(initialValue)
    {
        this.initialValue = initialValue
        this.__isProp = true
        return this
    }



    _setSelector(selector)
    {
        this._selector = selector
    }

    _createSelector(storeName,propName)
    {
        if(storeName) this._selector = createSelector(state => state[storeName][propName],(_)=>_)
        else this._selector = createSelector(state => state[propName],(_)=>_)
    }

    getValue(state)
    {
        return this._selector(state)
    }

}