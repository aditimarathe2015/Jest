// import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new EnzymeAdapter() })


const Setup = () => shallow(<App />)
const wrapper = Setup()

const findbyTestAttr = (wrapper, Val) => wrapper.find(`[data-test='${Val}']`)

test('renders learn react link', () => {
  const wrapper = Setup()
  expect(wrapper).toBeTruthy();

});


test('render without error ', () => {
  const wrapper = Setup()
  const appComponent = findbyTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)
})

test('render button ', () => {

  const button = findbyTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
})

test('render button ', () => {

  const button = findbyTestAttr(wrapper, "decrement-button")
  expect(button.length).toBe(1)
})

test('render counter display ', () => {

  const counterDisplay = findbyTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})
test('Count start at 0 ', () => {

  const count = findbyTestAttr(wrapper, "count").text();
  expect(count).toBe("0")
})

test('clicking on button incriment counter display ', () => {
  //Find button
  const button = findbyTestAttr(wrapper, "increment-button")
  //click button 
  button.simulate('click')
  //find the display that the number incriment
  const count = findbyTestAttr(wrapper, "count").text();
  expect(count).toBe("1")
})


describe('decrement button', () => {
  test('renders decrement button', () => {
    const wrapper = Setup();
    const button = findbyTestAttr(wrapper, "decrement-button")
    button.simulate('click')
    const count = findbyTestAttr(wrapper, 'count').text();
    expect(count).toBe("0");
  })
  test('renders decrement button', () => {
    const wrapper = Setup();
    const button = findbyTestAttr(wrapper, 'decrement-button');
    expect(button.length).toBe(1);
  })
})