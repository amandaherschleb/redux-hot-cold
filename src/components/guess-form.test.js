import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions'

describe('<GuessForm />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should fire the onSubmit function when the form is submitted', () => {
      const dispatch = jest.fn();
      const wrapper = mount(<GuessForm dispatch={dispatch} />);

      wrapper.find('input[type="number"]').instance().value = "10"
      expect(wrapper.find('input[type="number"]').instance().value).toEqual("10")
      
      wrapper.simulate('submit');
      expect(dispatch).toHaveBeenCalledWith(makeGuess("10"));
    });

    it('Should clear the input when the form is submitted', () => {
      const dispatch = jest.fn();
      const wrapper = mount(<GuessForm dispatch={dispatch}/>);

      wrapper.find('input[type="number"]').instance().value = "10";
      expect(wrapper.find('input[type="number"]').instance().value).toEqual("10");

      wrapper.simulate('submit');
      expect(wrapper.find('input[type="number"]').instance().value).toEqual("");
    });
});
