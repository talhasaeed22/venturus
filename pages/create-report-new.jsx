import React, { useState } from 'react';
import Head from 'next/head';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import { countries } from '@/components/Helpers/Countries';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setGeneratedReport } from '../store/actions';
import { collection, addDoc } from 'firebase/firestore';
import { db, auth } from '@/FirebaseConfig';

import Loader from '@/components/Loader/Loader';
import withAuth from '@/lib/withAuth';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Button } from '@/components/ui/button';

const CreateReportPage = () => {
  const router = useRouter();
  const [error, setError] = useState(false);

  const [localReport, setLocalReport] = useLocalStorage('localReport', '');

  const [localTitle, setLocalTitle] = useLocalStorage('localTitle', '');

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [reportType, setReportType] = useState(10);

  const handleReportTypeChange = (event) => {
    setReportType(event.target.value);
  };

  const [language, setLanguage] = useState(10);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.length;

  const handleGeneratedReport = async () => {
    const currentTime = new Date();
    const month = currentTime.getMonth() + 1;
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();
    try {
      setLoading(true);
      const response = await axios.post(
        'https://gtmapp3-pmvgxtzxma-uc.a.run.app/get_responses/',
        {
          user_input: text,
        }
      );

      const responseData = response.data;

      await addDoc(collection(db, 'reports'), {
        user: auth.currentUser.uid,
        title: text,
        status: 'Generated',
        type: reportType === 10 ? 'Advanced' : 'Standard',
        report: responseData,
        month: month,
        date: date,
        year: year,
      });

      dispatch(setGeneratedReport(responseData));
      setLocalReport(responseData);
      setLocalTitle(text);
      router.push({
        pathname: '/generated-report',
        query: { title: text },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (!loading) {
    if (error) {
      return (
        <div className='h-screen flex flex-col justify-center items-center'>
          <p className='text-2xl font-bold'>
            An error ocurred while generating report..
          </p>
          <Button onClick={() => router.reload()}>Try Again</Button>
        </div>
      );
    }
    return (
      <div className=' py-5 mx-auto max-w-md px-2 md:max-w-screen-md min-h-full'>
        <h1 className='font-normal text-xl md:text-3xl mt-4 md:mt-8 mb-6 md:mb-12 text-center text-gray-900'>
          Describe your existing or new business in detail, receive a
          comprehensive analysis of the idea.
        </h1>

        <TextField
          id='outlined-textarea'
          label={'Business description'}
          placeholder={
            'An outline marketplace for renting luxury fashion and accessories'
          }
          multiline
          rows={3}
          value={text}
          onChange={handleTextChange}
          style={{ width: '100%', borderRadius: '6px' }}
          InputProps={{
            endAdornment: (
              <div style={{ color: '#1e51fd', fontSize: '1rem' }}>
                {wordCount}/1000 (min.8)
              </div>
            ),
          }}
        />

        <div className='flex sm:flex-row flex-col gap-5 justify-between items-center my-5'>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              Select a report type
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={reportType}
              label='Select a report type'
              onChange={handleReportTypeChange}
            >
              <MenuItem value={10}>Advanced</MenuItem>
              <MenuItem value={20}>Standard</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>Language</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={language}
              label='Language'
              onChange={handleChange}
            >
              {countries.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <button
            onClick={handleGeneratedReport}
            disabled={text.length === 0}
            className={`px-4 ${
              text.length < 8 && 'cursor-not-allowed opacity-50'
            }  hover:bg-[#1e51fd] h-min py-[0.5rem] sm:w-fit w-full bg-[#1e51fd] text-white rounded-[0.5rem]`}
          >
            Generate
          </button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='h-screen'>
        <div className='flex flex-col space-y-6 justify-center items-center my-20'>
          <h2 className='text-2xl font-bold'>Generating Your report...</h2>
          <Loader />
          <p>Please wait while we process your request</p>
        </div>
      </div>
    );
  }
};

export default CreateReportPage;
