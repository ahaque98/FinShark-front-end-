import React, { useEffect, useState } from "react";
import { CompanyProfile } from "../../company";
import { useParams } from "react-router-dom";
import { getCompanyProfile } from "../../api";
import CompanyDashboard from "../../components/CompanyDashboard/CompanyDashboard";
import Sidebar from "../../components/Sidebar/Sidebar";
import Tile from "../../components/Tile/Tile";
import Spinner from "../../components/Spinner/Spinner";
import CompFinder from "../../components/CompFinder/CompFinder";
import TenKFinder from "../../components/TenKFinder/TenKFinder";

interface Props { }

const CompanyPage = (props: Props) => {
    let { ticker } = useParams();

    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0]);
        };
        getProfileInit();
    }, []);

    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!}>
                        <Tile title="Company Name" subTitle={company.companyName} />
                        <Tile title="Price" subTitle={company.price.toString()} />
                        <CompFinder ticker={company.symbol} />
                        <TenKFinder ticker={company.symbol} />
                        <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-3 mt-1 m-4">
                            {company.description}
                        </p>
                        <Tile title="Sector" subTitle={company.sector} />
                        <Tile title="Market Cap" subTitle={company.mktCap.toString()} />
                    </CompanyDashboard>
                </div>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default CompanyPage;