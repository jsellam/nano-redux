import NanoRedux from 'nano-redux'
import {BasicProp,NumericProp,BooleanProp,ArrayProp} from 'nano-redux'



class UserRedux extends NanoRedux {

    init()
    {
        this.firstname  = new BasicProp('empty-firstname')
        this.like       = new NumericProp(10)
        this.isActive   = new BooleanProp(false)
        this.friends    = new ArrayProp(["friend 1","friend 2","friend 3"])

        this.doubleLike = this.createCustomAction('doubleLike',state => state.merge({like:state.like*2}))
        this.lastFriend = this.createCustomSelector(state => state.friends[state.friends.length-1])
    }

}

export default new UserRedux()