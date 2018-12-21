import React from 'react';
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Livro from '../components/Livro';

Enzyme.configure({ adapter: new Adapter() })

describe('Livro', () => {
    test('Renderizando Livro', () => {
        const wrapper = shallow(<Livro />);
        expect(wrapper.exists()).toBe(true);
    }),
    it('Testando interface com snapshots',()=>{
        const livro={
            titulo:'fakeLivro', 
            autor: 'fakeAutor', 
            editora:'fakeEditora',
            data:1
        }
        const tree = renderer.create(<Livro livro={livro}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
});
