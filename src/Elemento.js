import React, { Component } from 'react';
import Categoria from './Categoria'

class Elemento extends Component {
    constructor(props){
        super(props);
        this.state={
            categoria:['caio', 'neymar', 'ronaldo','seilá'] 
        }
    }

    criarCategoria = () => {
        let cater = [];
        for (let i = 0; i < 4; i++) {
            cater.push(<Categoria key={'categoria'+i} categoria={this.state.categoria[i]} clickAdicionar={this.props.clickAdicionar}/>);
        }
        return cater
    }

    render() {
        return (
            <div className='Elemento'>
                {this.criarCategoria()}
            </div>
        )
    }
}

export default Elemento;