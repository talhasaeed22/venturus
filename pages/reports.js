import React, { useEffect, useState } from 'react';
import Input from '@mui/joy/Input';
import ReportsTable from '@/components/Helpers/ReportsTable';
import { getDocs, collection } from 'firebase/firestore'
import { db, auth } from '@/FirebaseConfig';
import { reportsData } from '@/components/Helpers/ReportsData';

const Reports = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    fetchReports();
  }, [])

  const fetchReports = async () => {
    try {
      setLoading(true)
      const reportItems = [];
      const querySnapshot = await getDocs(collection(db, "reports"));
      querySnapshot.forEach((doc) => {
        const { user, title, report, type, status, month, date, year } = doc.data();
        if(auth.currentUser.uid === user){
          reportItems.push({
            title:title,
            status:status,
            type:type,
            report:report,
            month,
            date, year
          });
        }
      });
      setReports(reportItems);
      setLoading(false)
    } catch (excep) {
      console.log(excep);
    }
  }
  return (
    <div className='px-4 mx-auto max-w-screen-2xl lg:px-12 my-10'>
      <div className='bg-[#242e42] relative shadow-md sm:rounded-lg overflow-hidden '>
        <div className='flex flex-col gap-5 p-4'>
          <span className='text-white font-semibold text-[1rem] '>Reports</span>
          <div className='flex lg:flex-row flex-col justify-between gap-3 items-center border-b pb-2 border-gray-700 '>
            <div className='lg:w-[30%] w-full '>
              <Input
                placeholder='Search…'
                color='success'
                sx={{
                  width: '100%',
                  color: '#d1d5db',
                  backgroundColor: 'rgb(55, 65, 81)',
                  border: '1px solid #4b5563',
                }}
                startDecorator={
                  <i className='fa fa-search' aria-hidden='true'></i>
                }
              />
            </div>

            <div className='w-full lg:w-fit'>
              <button
                className={`px-4 w-full hover:bg-[#357a3a] py-[0.5rem]  bg-[#4caf50] text-white rounded-[0.5rem]`}
              >
                {' '}
                <i
                  className='fa fa-plus text-normal mr-2'
                  aria-hidden='true'
                ></i>
                New Report
              </button>
            </div>
          </div>

          <div className='min-h-[30rem]'>
            <ReportsTable reports={reports} loading={loading} />
          </div>

          <div className='flex gap-3 justify-end'>
            <button className='opacity-50 cursor-normal ml-0 rounded-l-lg border  py-2 px-3 leading-tight border-gray-700 bg-[#1f2738] text-gray-400 hover:bg-[#454d5e] hover:text-white'>
              <i className='fa fa-angle-left' aria-hidden='true'></i> Previous
            </button>
            <button className='opacity-50 cursor-normal ml-0 rounded-l-lg border py-2 px-3 leading-tight border-gray-700 bg-[#1f2738] text-gray-400 hover:bg-[#454d5e] hover:text-white'>
              Next <i className='fa fa-angle-right' aria-hidden='true'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
