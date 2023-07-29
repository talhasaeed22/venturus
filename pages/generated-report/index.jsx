import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import data from '../../response.json';
import { Calendar } from "@/components/ui/calendar"


const GeneratedReportPage = ({ responseData }) => {
  console.log(data);
  return (
    <div className='h-screen'>
      <div className='mx-auto container'>
        <Tabs defaultValue='header 1' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value='header1'>Go To Market Strategy</TabsTrigger>
            <TabsTrigger value='header2'>Business Analysis</TabsTrigger>
            <TabsTrigger value='header3'>Build Your MVP</TabsTrigger>
            <TabsTrigger value='header4'>Product Marketing</TabsTrigger>
            <TabsTrigger value='header5'>Financing</TabsTrigger>
          </TabsList>
          <TabsContent value='header1'>Hi this is content 1</TabsContent>
          <TabsContent value='header2'>Change your header 2</TabsContent>
          <TabsContent value='header3'>Change your header 2</TabsContent>
          <TabsContent value='header4'>Change your header 2</TabsContent>
          <TabsContent value='header5'>Change your header 2</TabsContent>
        </Tabs>

        <div>
          <Tabs defaultValue='account' className='w-[400px]'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='account'>Account</TabsTrigger>
              <TabsTrigger value='password'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value='account'>
              RMP
            </TabsContent>
            <TabsContent value='password'>
              Rapid eye movement
            </TabsContent>
          </Tabs>
        </div>

        <div>
          {/* Display the fetched data */}
          {responseData ? (
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* <div className=''>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div> */}
      </div>
    </div>
  );
};

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
