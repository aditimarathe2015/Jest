// import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enzyme ,{shallow} from 'enzyme'
import EnzymeAdapter  from 'enzyme-adapter-react-16'
Enzyme.configure({adapter: new EnzymeAdapter()})  

test('renders learn react link', () => {
 const wrapper = shallow(<App/>)
//expect(wrapper).toBeTruthy();
const appComponent = wrapper.find("[data-test='component-app']")
expect(appComponent.length).toBe(1)
});


test('render without error ',()=>{
  const wrapper = shallow(<App/>)
  expect(wrapper).toBeTruthy();
})

test('render button ',()=>{

})

test('render counter display ',()=>{

})

test('clicking on button incriment counter display ',()=>{

})