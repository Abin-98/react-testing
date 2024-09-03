/*
greet should render text hello and if name is passed to comp
it should render hello followed by that name
*/

import {render, screen} from '@testing-library/react';
import { Greet } from './greet';

test("greet renders correctly",()=>{
    render(<Greet/>)
    const textElement=screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test("greet renders name", ()=>{
    render(<Greet name="Abin"/>)
    const textElement=screen.getByText("Hello Abin")
    expect(textElement).toBeInTheDocument()
})