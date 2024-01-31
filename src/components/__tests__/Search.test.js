import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../../mockData/resListData.json";
import {act} from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

//Mock Api function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    });
});

it('should render body component with search input', async() => {
    await act(async() => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    )

    // const searchBtn = screen.getByTestId('searchBth');
    // const searchInput = screen.getByTestId('searchInput'); //<input data-testid="searchInput"/>
    // fireEvent.change(searchInput, {target:{value:"pizza"}});
    // fireEvent.click(searchBtn);
    // const cards = screen.getAllByTestId('resCards'); //<div data-testid='resCards' className="resCard">
    // expect(cards.length).toBe(2);
});