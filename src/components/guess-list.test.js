import React from 'react';
import {shallow} from 'enzyme';

import {GuessList} from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[1, 2, 3]} />);
    });

    it('Renders a list of guesses', () => {
        const guesses = [1, 2, 3];
        const wrapper = shallow(<GuessList guesses={guesses} />);
        expect(wrapper.hasClass("guessBox")).toEqual(true);
        expect(wrapper.contains(guesses[0], guesses[1], guesses[2])).toEqual(true);
    });
});
