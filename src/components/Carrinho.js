import React from 'react';
import ItemCarrinho from './ItemCarrinho';
import id from 'uuid/v1'

function Carrinho(props){
    
        return (
            <div className='Carrinho'>
                {props.carrinho.map(
                    item => 
                        <ItemCarrinho item={item} key={id} clickExcluir={props.clickExcluir}/>     
                    )
                }
            </div>
        )
    
}



export default Carrinho;