import React from "react";
import { render } from "@testing-library/react";
import Detail from "@pages/Detail"; // убедитесь, что путь правильный

// Мокаем дочерние компоненты
jest.mock("@components/header/Header", () => () => <div>Header</div>);
jest.mock("@components/artDetailInfo/ArtDetailInfo", () => () => <div>ArtDetailInfo</div>);
jest.mock("@components/footer/Footer", () => () => <div>Footer</div>);

describe("Detail", () => {
    it("должен рендерить Header, ArtDetailInfo и Footer", () => {
        const { getByText } = render(<Detail />);
        expect(getByText("Header")).toBeInTheDocument();
        expect(getByText("ArtDetailInfo")).toBeInTheDocument();
        expect(getByText("Footer")).toBeInTheDocument();
    });
});
