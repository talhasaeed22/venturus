import React from 'react';
import { reportsData } from './ReportsData';
import { setGeneratedReport } from '@/store/actions';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import LoadingSpinner from '../Spinner/LoadingSpinner';
const ReportsTable = ({ reports, loading }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleReport = (title, data) => {
    dispatch(setGeneratedReport(data));

    router.push({
      pathname: '/generated-report',
      query: { title: title },
    });
  }
  return (
    <div className='overflow-x-auto relative'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-gray-400 font-medium text-sm'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              TITLE
            </th>
            <th scope='col' className='py-3 px-6'>
              STATUS
            </th>
            <th scope='col' className='py-3 px-6'>
              TYPE
            </th>
            <th scope='col' className='py-3 px-6'>
              CREATED AT
            </th>
          </tr>
        </thead>
        <tbody>
          {loading ? <div className='flex items-center justify-center my-10 w-full'><LoadingSpinner /></div> : reports.map((item, index) => {
            return (
              <tr
                onClick={()=>{handleReport(item.title, item.report)}}
                key={index}
                className='bg-[#1f2738] border-b-2 border-gray-700 hover:bg-[#454d5e] hover:cursor-pointer'
              >
                <th
                  scope='row'
                  className='py-4 px-6 font-medium whitespace-nowrap text-ellipsis text-white text-base '
                >
                  {item.title.length > 130
                    ? `${item.title.slice(0, 130)} ....`
                    : item.title}
                </th>
                <td className='py-4 px-6'>
                  <span className='bg-[#357a3a] text-white px-2 rounded-md'>
                    {item.status}
                  </span>
                </td>
                <td className='py-4 px-6'>{item.type}</td>
                <td className='py-4 px-6'>{item.date}/{item.month}/{item.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
