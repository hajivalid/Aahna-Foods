import { render, screen } from "@testing-library/react";
import RestaurantCard , {HigherOrderLabel} from "../RestaurantCard";
import MOCK_DATA from "../../mockData/resMockData.json";
import "@testing-library/jest-dom";

it('should render restaurant card with props data', () => {
    render(<RestaurantCard filterData={MOCK_DATA}/>);

    const resTitle = screen.getByText('Millet Express');
    expect(resTitle).toBeInTheDocument();
})
it('should render restaurant card with discount label', () => {
    const PromotedRestaurantCard = HigherOrderLabel(RestaurantCard);
    render(<PromotedRestaurantCard filterData={MOCK_DATA}/>);

    const resTitle = screen.getByText('Millet Express');
    expect(resTitle).toBeInTheDocument();
})