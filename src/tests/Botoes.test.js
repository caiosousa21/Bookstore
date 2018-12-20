import React from 'react';
import Botoes from '../Botoes';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Botoes', () => {
    test('Renderizando Botoes', () => {
        const wrapper = shallow(<Botoes />);
        expect(wrapper.exists()).toBe(true);
    }),
    test('Botao Add onClick', () => {
        const livro = {
            titulo:'caio'
        }
        const clickAdicionar = jest.fn();
        const wrapper = shallow(<Botoes clickAdicionar={clickAdicionar} livro={{titulo:''}}/>);
        const btn = wrapper.find('button').at(1);
        btn.simulate('click');
        expect(clickAdicionar).toBeCalled();
    })
    
})