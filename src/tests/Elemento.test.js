import React from 'react';
import Elemento from '../components/Elemento';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('Elemento', () => {
    it('Renderizando Elemento', () => {
        const wrapper = shallow(<Elemento listaListas='' listaLivros='' />);
        expect(wrapper.exists()).toBe(true);
    })
    it('Testando interface com snapshots',()=>{
        const tree = renderer.create(<Elemento listaListas={[['caio']]}  listaLivros={[['caio']]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})