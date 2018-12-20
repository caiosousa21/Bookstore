import React from 'react';
import Card from '../Card';
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()})

describe('Card', ()=>{
    const livro={
        titulo:undefined, 
        autor: undefined, 
        editora:undefined,
        data:undefined
    }
    test('renderizando Card',()=>{
        const wrapper = shallow(<Card livro={livro}/>);
        expect(wrapper.exists()).toBe(true);
    })
})