import React from 'react';
import App from '../components/App';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('index', () => {
    it('Renderizando index', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Testando interface com snapshots',()=>{
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    }),
    it('Testando funções',()=>{
        const wrapper = shallow(<App/>);
        const foo = wrapper.instance().clickExcluir();
        expect(foo).toBe();
        const foo2 = wrapper.instance().clickAdicionar();
        expect(foo2).toBe();
        const foo3 = wrapper.instance().clickAdicionarLivro();
        expect(foo3).toBe();
        const foo4 = wrapper.instance().clickAdicionarLivro('caio',0);
        expect(foo4).toBe();
        const foo5 = wrapper.instance().clickExcluir(0);
        expect(foo5).toBe();
    })
})