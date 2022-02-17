import { screen, render } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

const props = postCardPropsMock


describe('<PostCard />' , () => {
    it('should render postcard correctly', () => {
        render(<PostCard {...props}/>);

        expect(screen.getByRole('img', {name: 'Tittle1'})).toHaveAttribute('src', 'img/img.png');
        
    });
})
