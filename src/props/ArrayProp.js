import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class ArrayProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.resetValue = createAction(prefix('reset',propName))
        this.push = createAction(prefix('addTo',propName))
        this.removeAt = createAction(prefix('removeTo',propName+'At'))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.resetValue]:reducers.reset(propName,this.initialValue),
            [this.push]:reducers.addArray(propName),
            [this.removeAt]:reducers.removeArrayAt(propName)
        }
    }

    setValue(value){}
    resetValue(){}
    push(){}
    removeAt(){}
}