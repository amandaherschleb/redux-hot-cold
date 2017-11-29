import React from 'react';
import {shallow} from 'enzyme';

import {Feedback} from './feedback';

describe('<Feedback />', () => {
  it('Renders without crashing', () => {
    shallow(<Feedback />);
  });

  it('Renders feedback on the guess', () => {
    const feedback = "You're not good at this game"
    const wrapper = shallow(<Feedback feedback={feedback}/>)
    expect(wrapper.contains(feedback)).toEqual(true)
  });
});
