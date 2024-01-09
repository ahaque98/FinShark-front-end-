import React from 'react'
import './Card.css'

interface Props {
    companyName: string,
    ticker: string,
    price: number
};

const Card: React.FC<Props> = ({ companyName, ticker, price }: Props): JSX.Element => {
    return (
        <>
            <div className="card">
                <img
                    src="https://images.unsplash.com/photo-1607017346418-4e51f4666f6f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <div className="details">
                    <h2>{companyName} ({ticker})</h2>
                    <p>${price}</p>
                </div>

                <p className="info">
                    Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit.
                    Soluta quia sunt exercitationem laborum
                    reprehenderit a recusandae molestiae
                    tempora quisquam earum rerum aspernatur,
                    natus tempore sint debitis labore eos aliquam corporis.
                </p>
            </div>
        </>
    )
}

export default Card;