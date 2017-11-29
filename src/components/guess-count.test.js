import React from 'react';
import {shallow} from 'enzyme';

import {GuessCount} from './guess-count';

describe('<GuessCount />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessCount />);
  });

  it('Renders the count', () => {
    const count = 10;
    const wrapper = shallow(<GuessCount guessCount={count} />);
    expect(wrapper.contains(count)).toEqual(true);
});
});
