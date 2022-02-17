import { TextInput } from "."

import { screen, render } from "@testing-library/react"
import userEvent from '@testing-library/user-event';


describe('<TextInput />', () => {
    it('Shoud have a value of searchValue', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} searchValue={'testando'} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        expect(input.value).toBe('testando');
    });

    it('Shoud call handleChange function on each key pressed', () => {
        const fn = jest.fn();
        render(<TextInput handleChange={fn} />);

        const input = screen.getByPlaceholderText(/type your search/i);
        const value = 'the value';

        userEvent.type(input, value);
        
        expect(input.value).toBe(value);
        expect(fn).toHaveBeenCalledTimes(value.length);
     
    });
    it('should match snapshot', () => {
        const fn = jest.fn();
        const { container } = render(<TextInput handleChange={fn} />);
        expect(container).toMatchSnapshot();
      });

});