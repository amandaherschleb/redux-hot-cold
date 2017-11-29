import React from 'react';
import {shallow} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('<AuralStatus />', () => {
  it('Renders without crashing', () => {
    shallow(<AuralStatus />);
  });

  it('Generates aural status', () => {
    const auralStatus = "I don't know what aural is"
    const wrapper = shallow(<AuralStatus auralStatus={auralStatus}/>)
    expect(wrapper.contains(auralStatus)).toEqual(true)
  });
});
