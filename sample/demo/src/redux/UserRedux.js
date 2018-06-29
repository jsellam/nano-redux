import NanoRedux from 'nano-redux'
import {BasicProp,NumericProp,BooleanProp,ArrayProp} from 'nano-redux'



class UserRedux extends NanoRedux {
    init()
    {
        this.userName  = new BasicProp('no-username')
        this.like       = new NumericProp(10)
        this.logged   = new BooleanProp(false)
        this.friends    = new ArrayProp(["friend 1","friend 2","friend 3"])

        
        this.lastFriend = this.createCustomSelector(state => state.friends[state.friends.length-1])
        this.doubleLike = this.createCustomAction('doubleLike',state => state.merge({like:state.like*2}))
    }
}

export default new UserRedux()