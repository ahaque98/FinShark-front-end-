import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';
import Sidebar from '../../components/Sidebar/Sidebar';

interface Props { }

const CompanyPage = (props: Props) => {

    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            setCompany(result?.data[0])
        }
        getProfileInit();
    }, [])

    return (
        <>
            {
                company ? (
                    <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">

                        <Sidebar />

                        <div className="relative md:ml-64 bg-blueGray-100 w-full">

                            <div className="relative pt-20 pb-32 bg-lightBlue-500">

                                <div className="px-4 md:px-6 mx-auto w-full">

                                    <div>

                                        <div className="flex flex-wrap">

                                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">

                                                    <div className="flex-auto p-4">

                                                        <div className="flex flex-wrap">

                                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

                                                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                                                                    Traffic

                                                                </h5>

                                                                <span className="font-bold text-xl">350,897</span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">

                                                    <div className="flex-auto p-4">

                                                        <div className="flex flex-wrap">

                                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

                                                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                                                                    NEW USERS

                                                                </h5>

                                                                <span className="font-bold text-xl">2,356</span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">

                                                    <div className="flex-auto p-4">

                                                        <div className="flex flex-wrap">

                                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

                                                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                                                                    SALES

                                                                </h5>

                                                                <span className="font-bold text-xl">924</span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">

                                                <div className="relative flex flex-col min-w-0 break-words bg-white rounded-lg mb-6 xl:mb-0 shadow-lg">

                                                    <div className="flex-auto p-4">

                                                        <div className="flex flex-wrap">

                                                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">

                                                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">

                                                                    PERFORMANCE

                                                                </h5>

                                                                <span className="font-bold text-xl">49,65%</span>

                                                            </div>

                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                ) : (
                    <div>Company not found!</div>
                )
            }
        </>
    )
}

export default CompanyPage