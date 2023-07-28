import React from 'react'
import Input from '@mui/joy/Input';
import ReportsTable from '@/components/Helpers/ReportsTable';

const Reports = () => {
    return (


        <div className='px-4 mx-auto max-w-screen-2xl lg:px-12 my-10'>
            <div className='bg-[#242e42] relative shadow-md sm:rounded-lg overflow-hidden '>
                <div className='flex flex-col gap-5 p-4'>

                    <span className='text-white font-semibold text-[1rem] '>Reports</span>
                    <div className='flex justify-between items-center border-b pb-2 border-gray-700 '>
                        <div className='w-[30%] '>
                            <Input placeholder="Search…" color='success' sx={{ width: '100%', color: '#d1d5db', backgroundColor: 'rgb(55, 65, 81)', border: '1px solid #4b5563' }} startDecorator={<i className="fa fa-search" aria-hidden="true"></i>} />

                        </div>

                        <div className=''>

                            <button className={`px-4 hover:bg-[#357a3a] py-[0.5rem]  bg-[#4caf50] text-white rounded-[0.5rem]`}> <i className="fa fa-plus text-normal mr-2" aria-hidden="true"></i>
                                New Report</button>
                        </div>

                    </div>

                    <div className='min-h-[30rem]'>
                        <ReportsTable/>
                    </div>

                    <div className='flex gap-3 justify-end'>
                         <button className='opacity-50 cursor-normal ml-0 rounded-l-lg border  py-2 px-3 leading-tight border-gray-700 bg-[#1f2738] text-gray-400 hover:bg-[#454d5e] hover:text-white'><i className="fa fa-angle-left" aria-hidden="true"></i> Previous</button>
                         <button className='opacity-50 cursor-normal ml-0 rounded-l-lg border py-2 px-3 leading-tight border-gray-700 bg-[#1f2738] text-gray-400 hover:bg-[#454d5e] hover:text-white'>Next <i className="fa fa-angle-right" aria-hidden="true"></i>
</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Reports
