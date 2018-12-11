import React, { Component } from 'react';

class Barra extends Component{
    render(){
        return(
            <div className='Barra'>
            <p className='PBarra'>Caio Books</p>
            <div className='Canto'>
              <button className='BtnCarrinho'>Carrinho</button>
              <div className='Carrinho'></div>
            </div>
          </div>
        )
    }
}
export default Barra;