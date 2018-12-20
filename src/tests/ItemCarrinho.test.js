import React from 'react';
import ItemCarrinho from '../components/ItemCarrinho';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

describe('ItemCarrinho', ()=>{
    test('Renderizando ItemCarrinho',()=>{
        const wrapper = shallow(<ItemCarrinho />);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Ativando event handler onClick',()=>{
        const clickExcluir = jest.fn();
        const wrapper = shallow(<ItemCarrinho clickExcluir={clickExcluir}/>);
        const btnExcluir = wrapper.find('button');
        btnExcluir.simulate('click');
        expect(clickExcluir).toBeCalled();
        
    })
})