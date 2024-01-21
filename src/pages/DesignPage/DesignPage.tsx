import React from 'react'
import Table from '../../components/Table/Table'
import RatioList from '../../components/RatioList/RatioList'

type Props = {}

const DesignPage = (props: Props) => {
    return (
        <>
            <h1>FinShark Design Page</h1>
            <h2>This is finshark's design page, this is where we will
                house various design aspects of this app.
            </h2>

            <RatioList />
            <Table />
        </>
    )
}

export default DesignPage