import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';

const GeneratedReportPage = () => {
  const router = useRouter()
  const generatedReport = useSelector((state) => state.generatedReport);
  const title = router.query.title;

  const apiResponses = generatedReport
  console.log("Generated report", generatedReport)
  const tabHeadings = Object.keys(apiResponses?.responses);
  // const title = "AI robotics Lab with alot of interface with students AI robotics Lab with alot of interface with students studying computer science"
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
            {Object.keys(apiResponses?.responses[tabHeading]).map((subHeading) => (
              <div key={subHeading}>
                <h2 className='text-xl font-bold my-4'>{subHeading}</h2>
                {apiResponses?.responses[tabHeading][subHeading].map(
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

export default GeneratedReportPage;
