import React from 'react';
import Categoria from '../components/Categoria';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Livro from '../components/Livro';

Enzyme.configure({ adapter: new Adapter() })

describe('Categoria', () => {
    test('Renderizando Categoria', () => {
        const wrapper = shallow(<Categoria listaLivros=''/>);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Testando interface com snapshots',()=>{
        const tree = renderer.create(<Categoria listaLivros='caio'/>).toJSON();
        expect(tree).toMatchSnapshot();
    }),
    it('Testando criação de Livro via carregarLivro() manualmente',()=>{
        const wrapper = shallow(<Categoria listaLivros={['caio','neymar','ronaldo']}/>);
        const foo = wrapper.instance().carregarLivro();
    expect(JSON.stringify(foo)).toEqual(JSON.stringify([<Livro key='livro0' livro='caio'/>,<Livro key='livro1' livro='neymar'/>,<Livro key='livro2' livro='ronaldo'/>]))
    })
})