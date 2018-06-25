import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {userSelectors,userActions, withUser} from './../redux/UserRedux'
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
        </div>
        )
    }
}




const mapStateToProps = (state) => ({
    userName:userSelectors.userName(state),
    like:userSelectors.like(state),
    logged:userSelectors.logged(state)
  })
  
  const mapActions = (dispatch) => ({
    setUserName:(userName)=> dispatch(userActions.setUserName(userName)),
    resetUserName:()=>dispatch(userActions.resetUserName()),

    incLike:()=>dispatch(userActions.incLike()),
    descLike:()=>dispatch(userActions.descLike()),
    setLike:(value)=>dispatch(userActions.setLike(value)),
    resetLike:()=>dispatch(userActions.resetLike()),

    enableLogged:()=>dispatch(userActions.enableLogged()),
    disableLogged:()=>dispatch(userActions.disableLogged()),
    toggleLogged:()=>dispatch(userActions.toggleLogged()),
    setLogged:(value)=>dispatch(userActions.setLogged(value)),
    resetLogged:()=>dispatch(userActions.resetLogged())
  })

  
  export default connect(mapStateToProps, mapActions)(Home)
