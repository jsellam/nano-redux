import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class ArrayProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.reset = createAction(prefix('reset',propName))
        this.push = createAction(prefix('addTo',propName))
        this.removeAt = createAction(prefix('removeTo',propName+'At'))
        this.removeFirst = createAction(prefix('removeFirstTo',propName))
        this.removeLast = createAction(prefix('removeLastTo',propName))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.reset]:reducers.reset(propName,this.initialValue),
            [this.push]:reducers.addArray(propName),
            [this.removeAt]:reducers.removeArrayAt(propName),
            [this.removeFirst]:reducers.removeArrayFirst(propName),
            [this.removeLast]:reducers.removeArrayLast(propName)
        }
    }

    setValue(value){}
    reset(){}
    push(){}
    removeAt(){}
    removeFirst(){}
    removeLast(){}
}