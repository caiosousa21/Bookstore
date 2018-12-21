import React from 'react';
import Titulo from '../components/Titulo';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('Titulo', () => {
    test('Renderizando Titulo', () => {
        const wrapper = shallow(<Titulo/>);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Testando interface com snapshots',()=>{
        const tree = renderer.create(<Titulo/>).toJSON();
        expect(tree).toMatchSnapshot();
    }),
    it('Testando Click no botão Inserir',()=>{
        const wrapper = shallow(<Titulo />);
        let prevented = false;
        wrapper.find('button').at(0).simulate('click', {
            preventDefault: () => { prevented = true; }
        });
        expect(prevented).toBe(true);
    })
})