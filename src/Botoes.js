import React, { Component } from 'react';

class Livro extends Component {
    
    render() {
        return (
            <div className='Botoes'>
                <button className='BtnDescr'>Descr</button>
                <button className='BtnAdd' onClick={()=>{this.props.clickAdicionar(this.props.livro.nome)}}>Add</button>
            </div>
        )
    }
}
export default Livro;