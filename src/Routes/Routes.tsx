import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import BalanceSheet from "../components/BalanceSheet/BalanceSheet";
import CompanyProfile from "../components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../components/IncomeStatement/IncomeStatement";
import CompanyPage from "../pages/CompanyPage/CompanyPage";
import HomePage from "../pages/HomePage/HomePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import DesignPage from "../pages/DesignPage/DesignPage";
import CashflowStatement from "../components/CashflowStatement/CashflowStatement";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "", element: <HomePage /> },
            { path: "search", element: <SearchPage /> },
            { path: "design-guide", element: <DesignPage /> },
            {
                path: "company/:ticker",
                element: <CompanyPage />,
                children: [
                    { path: "company-profile", element: <CompanyProfile /> },
                    { path: "income-statement", element: <IncomeStatement /> },
                    { path: "balance-sheet", element: <BalanceSheet /> },
                    { path: "cashflow-statement", element: <CashflowStatement /> },
                ],
            },
        ],
    },
]);