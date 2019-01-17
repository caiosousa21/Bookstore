import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Creators as ListaActions} from '../store/actions/lista'

class InputBuscar extends Component{
    constructor(props){
        super(props)
        this.state={
            busca:''
        }
    }
    buscaChange = (e) => {
        this.setState({
            busca: e.target.value
        })
    }
    render(){
        return(
            <div className='vid'>
            <input className='InputBuscar' onChange={e=>this.buscaChange(e)}>

            </input>
            </div>
        )
    }
}

export default connect(null, null)(InputBuscar)