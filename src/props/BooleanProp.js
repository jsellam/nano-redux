import prefix from './../lib/prefix'
import * as reducers from './../lib/reducers'
import AbstractProp from './AbstractProp'
import { createAction } from 'redux-act'

export default class BooleanProp extends AbstractProp{

    _createReducers(propName)
    {
        this.setValue = createAction(prefix('set',propName))
        this.resetValue = createAction(prefix('reset',propName))
        this.enable = createAction(prefix('enable',propName))
        this.disable = createAction(prefix('disable',propName))
        this.toggle = createAction(prefix('toggle',propName))

        return {
            [this.setValue]:reducers.basicMerge(propName),
            [this.resetValue]:reducers.reset(propName,this.initialValue),
            [this.enable]:reducers.enableBoolean(propName),
            [this.disable]:reducers.disableBoolean(propName),
            [this.toggle]:reducers.toggleBoolean(propName),
        }
    }

    setValue(value){}
    resetValue(){}
    enable(){}
    disable(){}
    toggle(){}
}