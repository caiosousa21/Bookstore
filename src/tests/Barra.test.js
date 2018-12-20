import React from 'react';
import Barra from '../Barra';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('Barra', () => {
    test('Renderizando Barra', () => {
        const wrapper = shallow(<Barra />);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Verificando se o click engatilha o event handler, e muda o estado de isHidden', () => {
        const wrapper = shallow(<Barra />);
        let button = wrapper.find('button');
        button.simulate('click');
        expect(wrapper.state().isHidden).toEqual(false);
        button.simulate('click');
        expect(wrapper.state().isHidden).toEqual(true);
    })
})