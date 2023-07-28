import React from 'react'
import { reportsData } from './ReportsData'
const ReportsTable = () => {
    return (
      

                <div className="overflow-x-auto relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-gray-400 font-medium text-sm">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    TITLE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    STATUS
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    TYPE
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    CREATED AT
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {reportsData.map((item, index) => {
                                return <tr key={index} className="bg-[#1f2738] border-b-2 border-gray-700 hover:bg-[#454d5e] hover:cursor-pointer">
                                    <th scope="row" className="py-4 px-6 font-medium whitespace-nowrap text-ellipsis text-white text-base ">
                                        {item.title.length > 130 ? (`${item.title.slice(0, 130)} ....`) : item.title}
                                        
                                    </th>
                                    <td className="py-4 px-6">
                                        <span className='bg-[#357a3a] text-white px-2 rounded-md'>{item.status}</span>
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.type}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.createdAt}
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

    )
}

export default ReportsTable
