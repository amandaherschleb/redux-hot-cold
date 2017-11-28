import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
      const state = reducer(undefined, {type: '__UNKNOWN'});
      expect(state.guesses).toEqual([])
      expect(state.feedback).toEqual('Make your guess!')
      expect(state.auralStatus).toEqual('')
      expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
      expect(state.correctAnswer).toBeLessThanOrEqual(100)
    });

    it('Should return the current state on an unknown action', () => {
      let currentState = {};
      const state = reducer(currentState, {type: '__UNKNOWN'});
      expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
      it('Should restart the game', () => {
        // setup fake state
        let state = {
          guesses: [1, 2, 3, 4],
          feedback: 'Not even close',
          correctAnswer: 111 // to check that it was reset
        }

        const correctAnswer = 5;  // new correct answer
        state = reducer(state, restartGame(correctAnswer));

        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual('Make your guess!')
        expect(state.auralStatus).toEqual('')
        expect(state.correctAnswer).toEqual(correctAnswer)
      });
    });

    describe('makeGuess', () => {
      it('Should update guesses and feedback', () => {
        // setup fake state
        let state = {
          guesses: [],
          feedback: '',
          correctAnswer: 50
        };

        // test all cases for feedback based on differenec
        state = reducer(state, makeGuess(0));
        expect(state.guesses).toEqual([0])
        expect(state.feedback).toEqual("You're Ice Cold...")

        state = reducer(state, makeGuess(20));
        expect(state.guesses).toEqual([0, 20])
        expect(state.feedback).toEqual("You're Cold...")

        state = reducer(state, makeGuess(40));
        expect(state.guesses).toEqual([0, 20, 40])
        expect(state.feedback).toEqual("You're Warm.")

        state = reducer(state, makeGuess(49));
        expect(state.guesses).toEqual([0, 20, 40, 49])
        expect(state.feedback).toEqual("You're Hot!")

        state = reducer(state, makeGuess(50));
        expect(state.guesses).toEqual([0, 20, 40, 49, 50])
        expect(state.feedback).toEqual("You got it!")
      });
    });

    describe('generateAuralUpdate', () => {
      it('Should generate an aural update for guesses', () => {
        // setup fake state to test pluralize
        let state = {
          guesses: [1, 2, 3, 4],
          feedback: "You're Ice Cold...",
          correctAnswer: 99
        }

        const correctAnswer = 5;  // new correct answer
        state = reducer(state, generateAuralUpdate(state));
        expect(state.auralStatus).toContain(
          `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} guesses.`
        )
      });

      it('Should generate an aural update for one guess', () => {
        // setup fake state to test pluralize
        let state = {
          guesses: [1],
          feedback: "You're Ice Cold...",
          correctAnswer: 99
        }

        const correctAnswer = 5;  // new correct answer
        state = reducer(state, generateAuralUpdate(state));
        expect(state.auralStatus).toContain(
          `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} guess.`
        )
      });
    });
});
