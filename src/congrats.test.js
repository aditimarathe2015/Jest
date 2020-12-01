import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdpter from 'enzyme-adapter-react-16'
import Congrats from './congrats'
import { findByTestAttri } from '../test/testUtils'


Enzyme.configure({ adapter: new EnzymeAdpter() })

const setup = (props = {}) => {
    return shallow(<Congrats{...props} />)
}
test('render Withour error', () => {
    const wrapper = setup();
    const component = findByTestAttri(wrapper, 'component-congrats');
    expect(component.length).toBe(0)

})
test('render no text when success props is false', () => {
    const wrapper = setup({ success: false });
    // const component = findByTestAttri(wrapper, 'component-congrats');
    // expect(component.text()).toBe(1)

})

test('render no empty congrats message when success props is true', () => {
    const wrapper = setup({ success: true });
    const message = findByTestAttri(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(1)

})