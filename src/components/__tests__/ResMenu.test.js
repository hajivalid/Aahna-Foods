import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu/RestaurantMenu";
import MOCK_DATA from "../../mockData/resMenuData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/redux/appStore";
import Header from "../Header/Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import CartItems from "../CartItems";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <CartItems/>
        </Provider>
      </BrowserRouter>
    );
  });
  const accordionHeader = screen.getByText("Season Special (3)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(3);

  expect(screen.getByText("0")).toBeInTheDocument();

  const addBtn = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtn[0]);

  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(addBtn[1]);
  expect(screen.getByText("2")).toBeInTheDocument();

  const cartItems = screen.getAllByTestId("foodItems");
  expect(cartItems.length).toBe(5);

  const clearBtn = screen.getByRole("button", { name: "Clear" });
  fireEvent.click(clearBtn);

  expect((screen.getAllByTestId("foodItems")).length).toBe(3);
});
