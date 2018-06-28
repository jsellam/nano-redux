import React, { Component } from 'react'
import PropTypes from 'prop-types'
import userRedux from './../redux/UserRedux'
import {connect} from 'react-redux'

class Home2 extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className:''
    }

    constructor(props)
    {
        super(props)
        console.log("userredux",userRedux)
    }

    changeName = () =>{
        this.props.setFirstname('toto')
    }

    incLike = () =>{
        this.props.incLike()
    }

    toggleActive = () =>{
        this.props.toggleActive()
    }

    addFriend = () =>{
        this.props.addFriend('toto')
    }

    doubleLike = () =>{
        console.log("double like call")
        this.props.doubleLike()
    }

    render() {
        return (
        <div className="home2" >
            <div onClick={this.changeName}>{this.props.firstname}</div>
            <div onClick={this.incLike}>{this.props.like}</div>
            <div onClick={this.toggleActive}>{this.props.isActive.toString()}</div>
            <div onClick={this.addFriend}>{this.props.friends.join(',')}</div>
            <div onClick={this.doubleLike}>double like</div>
            <div>last friend : {this.props.lastFriend}</div>
        </div>
        )
    }
}

const mapStateToProps = (state) =>{
   
    return {
        firstname:userRedux.firstname.getValue(state),
        like:userRedux.like.getValue(state),
        isActive:userRedux.isActive.getValue(state),
        friends:userRedux.friends.getValue(state),
        lastFriend:userRedux.lastFriend(state)
    }


}





const mapActions = (dispatch) => {
    return {
        setFirstname:(firstname)=>dispatch(userRedux.firstname.setValue(firstname)),
        incLike:()=>dispatch(userRedux.like.inc()),
        toggleActive:()=>dispatch(userRedux.isActive.toggle()),
        addFriend:(friendName)=>dispatch(userRedux.friends.push(friendName)),
        doubleLike:()=>dispatch(userRedux.doubleLike())
    }


}

  
export default connect(mapStateToProps, mapActions)(Home2)
