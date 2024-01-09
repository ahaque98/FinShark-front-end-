import React from "react";
import Card from "../Card/Card";

interface Props { }

const CardList: React.FC<Props> = (props: Props): JSX.Element => {
    return (
        <>
            <Card companyName="Apple" ticker="AAPL" price={190} />
            <Card companyName={"Microsoft"} ticker={"MSFT"} price={490} />
            <Card companyName={"Google"} ticker={"GOOGL"} price={347} />
        </>
    )
}

export default CardList;