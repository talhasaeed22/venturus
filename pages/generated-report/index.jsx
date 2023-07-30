import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import data from '../../response.json';
import { useState } from 'react';

const GeneratedReportPage = ({ responseData }) => {
  const tabHeadings = Object.keys(data.responses);
  const title = "AI robotics Lab with alot of interface with students AI robotics Lab with alot of interface with students studying computer science"
  return (
    <div className='container mx-auto flex flex-col justify-center items-center my-10'>
      <h2 className='text-xl font-bold mb-8 max-w-4xl'>Generated Report for {title}</h2>
      <Tabs defaultValue={tabHeadings[0]} className='w-[600px] mb-10'>
        <TabsList>
          {tabHeadings.map((tabHeading) => (
            <TabsTrigger key={tabHeading} value={tabHeading}>
              {tabHeading}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabHeadings.map((tabHeading) => (
          <TabsContent key={tabHeading} value={tabHeading}>
            {/* Rendering content from the JSON data */}
            {Object.keys(data.responses[tabHeading]).map((subHeading) => (
              <div key={subHeading}>
                <h2 className='text-xl font-bold my-4'>{subHeading}</h2>
                {data.responses[tabHeading][subHeading].map(
                  (content, index) => (
                    <p
                      key={index}
                      style={{ lineHeight: '1.2' }}
                      dangerouslySetInnerHTML={{
                        __html: content.replace(/\n/g, '<br/>'),
                      }}
                    />
                  )
                )}
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

//       <div>
//         {/* Display the fetched data */}
//         {/* {responseData ? (
//           <pre>{JSON.stringify(responseData, null, 2)}</pre>
//         ) : (
//           <p>Loading...</p>
//         )} */}
//       </div>

export async function getServerSideProps() {
  try {
    const response = await fetch(
      'https://gtmapp3-pmvgxtzxma-uc.a.run.app/get_responses/',
      { method: 'GET' } // Specify the HTTP method
    );
    const data = await response.json();
    console.log('API Response:', data); // Log the response data in the server console

    return {
      props: {
        responseData: data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        responseData: null,
      },
    };
  }
}

export default GeneratedReportPage;
