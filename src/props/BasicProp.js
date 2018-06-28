import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class BasicProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.reset = createAction(prefix('reset',propName))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.reset]:reducers.reset(propName,this.initialValue)
        }
    }

    setValue(value){}
    reset(){}
}