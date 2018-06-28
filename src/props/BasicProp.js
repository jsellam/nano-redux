import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class BasicProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.resetValue = createAction(prefix('reset',propName))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.resetValue]:reducers.reset(propName,this.initialValue)
        }
    }

    setValue(value){}
    resetValue(){}
}