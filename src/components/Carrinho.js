import React, { Component } from 'react';
import ItemCarrinho from './ItemCarrinho';
import { connect } from 'react-redux'
import id from 'uuid/v1'

class Carrinho extends Component {
    render() {
        return (
            <div className='Carrinho'>
                {this.props.carrinho.map(
                    item => 
                        <ItemCarrinho item={item} key={id} />     
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    carrinho: state.buscar.carrinho
})

export default connect(mapStateToProps, null)(Carrinho);