import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const GeneratedReportPage = () => {
  return (
    <div className='h-screen'>
      <div className='mx-auto container'>
        <Tabs defaultValue='header 1' className='w-[400px]'>
          <TabsList>
            <TabsTrigger value='header1'>Header 1</TabsTrigger>
            <TabsTrigger value='header2'>Header 2</TabsTrigger>
          </TabsList>
          <TabsContent value='header1'>Hi this is content 1</TabsContent>
          <TabsContent value='header2'>Change your header 2</TabsContent>
        </Tabs>

        <div className=''>
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
        </div>
      </div>
    </div>
  );
};

export default GeneratedReportPage;
