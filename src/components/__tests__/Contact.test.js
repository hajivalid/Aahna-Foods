import { render, screen } from "@testing-library/react"
import CompanyInfo from "../CompanyInfo";
import "@testing-library/jest-dom";


test("Should load Contact us component", ()=>{
    render(<CompanyInfo/>);
    const heading = screen.getAllByRole('heading');
    expect(heading.length).toBeGreaterThan(0);
});
describe('contact components', () => {

    //Helper functions
    beforeAll(() => {console.log('Before All test cases')})
    beforeEach(() => {console.log('Before Each test cases')})
    afterAll(() => {console.log('After All test cases')})
    afterEach(() => {console.log('After Each test cases')})
    
    test("Should load button inside Contact us component", ()=>{
        render(<CompanyInfo/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
    
    test("Should load button inside Contact us component", ()=>{
        render(<CompanyInfo/>);
        const button = screen.getByText('Submit');
        expect(button).toBeInTheDocument();
    });
    
    it("Should load input name inside Contact us component", ()=>{
        render(<CompanyInfo/>);
        const input = screen.getByPlaceholderText('Name');
        expect(input).toBeInTheDocument();
    });
})
