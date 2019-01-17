import React from 'react';

function ItemCarrinho(props) {
    return (
        <div className='ItemCarrinho'>
            <p className='PItem'>{props.item}</p>
            <button className='ExcluirItem' onClick={()=>props.clickExcluir(props.item)}></button>
            <hr></hr>
        </div>
    )

}
export default ItemCarrinho;