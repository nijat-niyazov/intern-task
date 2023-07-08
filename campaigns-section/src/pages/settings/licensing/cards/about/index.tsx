import { Card } from 'antd';
import { useState } from 'react';
import { IconOfAbout } from '~/assets/icons';
import { CardHeader } from '../../components/card';
import List from '../../components/list/List';

const About = ({ data }: { data: any }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      const formData = new FormData();
      formData.append('logo', file);

      try {
        setIsloading(true);
        const data = await uploadImage(formData);
        if (data) setSelectedFile(data);
      } catch (error) {
        setIsloading(false);
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="md:row-span-2 ">
      <Card className="px-4 py-2 h-full">
        <CardHeader
          title="About company"
          icon={<IconOfAbout />}
          openModalType="alert"
        />

        <div className="m-auto w-1/3 mt-5">
          <img
            className={`w-full object-contain h-full ${
              isLoading ? 'transition-opacity opacity-20' : 'opacity-100'
            } duration-200 h-40`}
            src={selectedFile?.logo ?? data?.logo}
            onLoad={() => setIsloading(false)}
          />
        </div>

        {/* <input disabled={isLoading} type="file" onChange={handleFileChange} /> */}

        <div className="mt-5">
          <List data={data} />
        </div>
      </Card>
    </div>
  );
};

export default About;
