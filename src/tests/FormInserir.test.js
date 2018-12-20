import React from 'react';
import FormInserir from '../FormInserir';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

describe('FormInserir', () => {

    test('Renderizando Form', () => {
        const wrapper = shallow(<FormInserir />);
        expect(wrapper.exists()).toBe(true);
    });

    for (let i = 0; i < 3; i++) {
        test('Inserindo Titulo, Autor e Editora no Form', () => {
            const wrapper = shallow(<FormInserir />);
            wrapper.find("input").at(i).simulate('change', { target: { value: 'caio' } });
            expect(wrapper.find("input").at(i).props().value).toBe('caio');
        })
    };

    test('Inserindo Data no Form', () => {
        const wrapper = shallow(<FormInserir />);
        wrapper.find("input").at(3).simulate('change', { target: { value: '2' } });
        expect(wrapper.find("input.InserirData").props().value).toBe('2');
    }),


    it('Previnindo comportamento default onSubmit do Form, e checando se ele está chamando a função clickAdicionarLivro', () => {
        const clickAdicionarLivro = jest.fn();
        const wrapper = shallow(<FormInserir clickAdicionarLivro={clickAdicionarLivro} />);
        let prevented = false;
        wrapper.find('form').simulate('submit', {
            preventDefault: () => { prevented = true; }
        });
        expect(prevented).toBe(true);
        expect(clickAdicionarLivro).toBeCalled();
    })
})