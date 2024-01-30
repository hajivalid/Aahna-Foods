import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header/Header"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/redux/appStore"
import "@testing-library/jest-dom";

test("should render Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    //const loginButton  = screen.getByRole('button');
    const loginButton  = screen.getByRole('button', {name: 'Login'});
    expect(loginButton).toBeInTheDocument();
});

test("should render Header component with cart count 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const cartCount  = screen.getByText('0');
    //const cartCount  = screen.getByText(/cart/);//if the lable is cart
    expect(cartCount).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton  = screen.getByRole('button', {name: 'Login'});
    fireEvent.click(loginButton);
    const logoutButton  = screen.getByRole('button', {name: 'Logout'});
    expect(logoutButton).toBeInTheDocument();
})

