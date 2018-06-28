import React, { Component } from 'react'
import PropTypes from 'prop-types'
import userRedux from './../redux/UserRedux'
import {connect} from 'react-redux'

class Home extends Component {
    static propTypes = {
        className: PropTypes.string
    }

    static defaultProps = {
        className:''
    }

    render() {
        return (
        <div className="home">
            <div className="demo">
               <h2>Basic value</h2>
               <span className="value">{this.props.userName}</span>
               <div className="actions">
                    <span className="button" onClick={()=>this.props.setUserName('Batman')}>setUserName('Batman')</span>
                    <span className="button" onClick={()=>this.props.setUserName('Luke Skywalker')}>setUserName('Luke Skywalker')</span>
                    <span className="button" onClick={()=>this.props.resetUserName()}>resetUserName()</span>
               </div>
            </div> 
            <div className="demo">
                <h2>Numeric value</h2>
                <span className="value">{this.props.like}</span>
                <div className="actions">
                    <span className="button" onClick={()=>this.props.incLike()}>incLike()</span>
                    <span className="button" onClick={()=>this.props.descLike()}>descLike()</span>
                    <span className="button" onClick={()=>this.props.setLike(20)}>setLike(20)</span>
                    <span className="button" onClick={()=>this.props.doubleLike()}>doubleLike()</span>
                    <span className="button" onClick={()=>this.props.resetLike()}>resetLike()</span>
                </div>
            </div> 
            <div className="demo">
                <h2>Boolean value</h2>
                <span className="value">{this.props.logged.toString()}</span>
                <div className="actions">
                    <span className="button" onClick={()=>this.props.enableLogged()}>enableLogged()</span>
                    <span className="button" onClick={()=>this.props.disableLogged()}>disableLogged()</span>
                    <span className="button" onClick={()=>this.props.toggleLogged()}>toggleLoged()</span>
                    <span className="button" onClick={()=>this.props.setLogged(true)}>setLogged(true)</span>
                    <span className="button" onClick={()=>this.props.resetLogged()}>resetLogged()</span>
                </div>
            </div>    


            <div className="demo">
                <h2>Array value</h2>
                <span className="value">{this.props.friends.join(',')}</span>
                <div className="value">last = {this.props.lastFriend}</div>
                <div className="actions">
                    <span className="button" onClick={()=>this.props.addToFriends("Friend"+Math.floor(Math.random()*100))}>addFriends(name)</span>
                    <span className="button" onClick={()=>this.props.removeToFriendsAt(3)}>removeFriendsAt(3)</span>
                    <span className="button" onClick={()=>this.props.removeFirstFriend()}>removeFirstFriend()</span>
                    <span className="button" onClick={()=>this.props.removeLastFriend()}>removeLastFriend()</span>
                </div>
            </div>    
            
            
        </div>
        )
    }
}




const mapStateToProps = (state) => ({
    userName:userRedux.userName.getValue(state),
    like:userRedux.like.getValue(state),
    logged:userRedux.logged.getValue(state),
    friends:userRedux.friends.getValue(state),
    lastFriend:userRedux.lastFriend(state)
  })
  
  const mapActions = (dispatch) => ({
   
    setUserName:(userName)=> dispatch(userRedux.userName.setValue(userName)),
    resetUserName:()=>dispatch(userRedux.userName.reset()),

    incLike:()=>dispatch(userRedux.like.inc()),
    descLike:()=>dispatch(userRedux.like.desc()),
    setLike:(value)=>dispatch(userRedux.like.setValue(value)),
    resetLike:()=>dispatch(userRedux.like.reset()),
    doubleLike:()=>dispatch(userRedux.doubleLike()),

    enableLogged:()=>dispatch(userRedux.logged.enable()),
    disableLogged:()=>dispatch(userRedux.logged.disable()),
    toggleLogged:()=>dispatch(userRedux.logged.toggle()),
    setLogged:(value)=>dispatch(userRedux.logged.setValue(value)),
    resetLogged:()=>dispatch(userRedux.logged.reset()),

    addToFriends:(name)=>dispatch(userRedux.friends.push(name)),
    removeToFriendsAt:(index)=>dispatch(userRedux.friends.removeAt(index)),
    removeFirstFriend:()=>dispatch(userRedux.friends.removeFirst()),
    removeLastFriend:()=>dispatch(userRedux.friends.removeLast()),
    
  })

  
  export default connect(mapStateToProps, mapActions)(Home)
