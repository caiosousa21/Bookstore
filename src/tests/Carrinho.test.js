import React from 'react';
import Carrinho from '../components/Carrinho';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ItemCarrinho from '../components/ItemCarrinho'

Enzyme.configure({ adapter: new Adapter() })

describe('Carrinho', () => {
    test('Renderizando Carrinho', () => {
        const wrapper = shallow(<Carrinho interior={'x'}/>);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Testando interface com snapshots',()=>{
        const tree = renderer.create(<Carrinho interior={''}/>).toJSON();
        expect(tree).toMatchSnapshot();
        const tree2 = renderer.create(<Carrinho interior={['caio','neymar','zé']}/>).toJSON();
        expect(tree2).toMatchSnapshot();
    }),
    it('Testando criação de itemCarrinho manualmente',()=>{
        const wrapper = shallow(<Carrinho interior={'x'}/>);
        const foo = wrapper.instance().carregarItem();
    expect(JSON.stringify(foo)).toEqual(JSON.stringify([<ItemCarrinho key='item0' item='x' index={0}/>]))
    })
})