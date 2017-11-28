import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';

describe('<TopNav />', () => {
  it('Renders without crashing', () => {
    shallow(<TopNav />);
  });

  it('Should start new game when + New Game is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<TopNav dispatch={dispatch} />);

    wrapper.find('.new').simulate('click')
    expect(dispatch).toHaveBeenCalled();
  })
});
