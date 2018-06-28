import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class NumericProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.reset = createAction(prefix('reset',propName))
        this.inc = createAction(prefix('inc',propName))
        this.desc = createAction(prefix('desc',propName))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.reset]:reducers.reset(propName,this.initialValue),
            [this.inc]:reducers.incNumeric(propName),
            [this.desc]:reducers.descNumeric(propName),
            [this.add]:reducers.addNumeric(propName)
        }
    }

    setValue(value){}
    reset(){}
    inc(){}
    desc(){}
}