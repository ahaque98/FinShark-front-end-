import React from 'react'

interface Props {
    portfolioValue: string;
}

const CardPortfolio = ({ portfolioValue }: Props) => {
    return (
        <div>
            <h4>{portfolioValue}</h4>
            <button>X</button>
        </div>
    )
}

export default CardPortfolio