import React, { useState } from 'react'
import Head from 'next/head'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const createReport = () => {
    const [reportType, setReportType] = React.useState(10);

    const handleReportChange = (event) => {
        setReportType(event.target.value);
    };

    const [language, setLanguage] = React.useState(10);

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };


    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const wordCount = text.length

    return (
        <>
            <Head>
                <title>Create report - VenturusAI</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className=' mx-auto  bg-gradient-to-r from-purpleish-lighter to-greenish-lighter'>

                <div className=' py-5 mx-auto max-w-md px-2 md:max-w-screen-md min-h-full'>
                    <h1 className='font-normal text-xl md:text-4xl mt-4 md:mt-8 mb-6 md:mb-12 text-center text-gray-900'>Describe your existing or new business in detail, receive a comprehensive analysis of the idea.</h1>

                    {/* <Textarea
                    
                        slots={{ textarea: InnerTextarea }}
                        slotProps={{ textarea: { placeholder: 'Example: An online marketplace for renting luxury fashion and accessories' } }}
                        sx={divStyles}
                    /> */}

                    <TextField
                        id="outlined-textarea"
                        label={'Business description'}
                        placeholder={'An outline marketplace for renting luxury fashion and accessories'}
                        multiline
                        rows={3}
                        color='success'
                        value={text}
                        onChange={handleTextChange}
                        style={{ width: '100%', borderRadius: '6px' }}
                        InputProps={{
                            endAdornment: <div style={{ color: '#6b7280', fontSize: '1rem' }}>{wordCount}/1000 (min.8)</div>,
                        }}
                    />

                    <div className='flex sm:flex-row flex-col gap-5 justify-between items-center my-5'>

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select a report type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={reportType}
                                label="Select a report type"
                                onChange={handleReportChange}
                                color='success'
                            >
                                <MenuItem value={10}>Advanced</MenuItem>
                                <MenuItem value={20}>Standard</MenuItem>
                            </Select>
                        </FormControl>


                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Language</InputLabel>
                            <Select
                                color='success'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={language}
                                label="Language"
                                onChange={handleChange}

                            >
                                <MenuItem value={10}>English</MenuItem>
                                <MenuItem value={20}>dansk</MenuItem>
                                <MenuItem value={30}>Cymraege</MenuItem>
                            </Select>
                        </FormControl>

                        <button disabled={text.length === 0} className={`px-4 ${text.length <8  && 'cursor-not-allowed opacity-50'}  hover:bg-[#357a3a] h-min py-[0.5rem] sm:w-fit w-full bg-[#4caf50] text-white rounded-[0.5rem]`}>Generate</button>

                    </div>

                    <span>We're in <span className='text-[#4caf50] hover:text-black cursor-pointer'>beta!</span> You have 0 Advanced reports and 10 Standard reports left. You get 0 Advanced reports and 10 Standard reports per month. <span className='text-[#4caf50] hover:text-black cursor-pointer'> Click here to get more Advanced reports.</span></span>
                </div>

            </div>
        </>
    )
}



export default createReport