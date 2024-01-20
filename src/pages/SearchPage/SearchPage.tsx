import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';
import CardList from '../../components/CardList/CardList';
import ListPortfolio from '../../components/Portfolio/ListPortfolio/ListPortfolio';
import Search from '../../components/Search/Search';

interface Props { }

const SearchPage = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        const result = await searchCompanies(search);

        if (typeof result === "string") {
            setServerError(result);
        }
        else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }

        console.log(searchResult);
    };

    const onPortfolioCreate = (e: any) => {

        e.preventDefault();

        const exists = portfolioValues.find((value) => value === e.target[0].value);

        if (exists) return;

        const updatedPortfolio = [...portfolioValues, e.target[0].value];

        setPortfolioValues(updatedPortfolio);

    }

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();

        const removed = portfolioValues.filter((value) => {
            return value !== e.target[0].value;
        });

        setPortfolioValues(removed);
    }

    return (
        <div className="App">
            <Search
                onSearchSubmit={onSearchSubmit}
                search={search}
                handleSearchChange={handleSearchChange}
            />

            <ListPortfolio
                portfolioValues={portfolioValues}
                onPortfolioDelete={onPortfolioDelete}
            />

            {serverError && <h1>{serverError}</h1>}
            <CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
        </div>
    )
}

export default SearchPage