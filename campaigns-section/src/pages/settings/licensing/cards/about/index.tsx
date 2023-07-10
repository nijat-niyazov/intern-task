import { Card } from 'antd';
import { useRef, useState } from 'react';
import { IconOfAbout } from '~/assets/icons';
import { uploadImage } from '../../api';
import CardHeader from '../../components/cardHeader';
import List from '../../components/list/List';
import downloadPhoto from '../../../../../assets/photo.png'

const About = ({ data }: { data: any }) => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [isLoading, setIsloading] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append('logo', file);

      try {
        setIsloading(true);
        const data = await uploadImage(formData);
        if (data) setSelectedFile(data.logo);
      } catch (error) {
        setIsloading(false);
        console.error('Error uploading image:', error);
      }
    }
  };

  return (
    <div className="md:row-span-2 w-full">
      <Card className="px-4 py-2 h-full">
        <CardHeader
          title="About company"
          icon={<IconOfAbout />}
          openModalType="alert"
        />

          <div
            onClick={() => inputRef?.current?.click()}
            className="w-[250px] m-auto cursor-pointer transition-opacity duration-300 hover:opacity-70 relative group mt-5"
          >
            
            <img
              className={`w-full object-contain h-full ${
                isLoading ? 'transition-opacity opacity-20' : 'opacity-100'
              } duration-200 aspect-video `}
              src={selectedFile || data?.logo}
              onLoad={() => setIsloading(false)}
            />

            <img src={downloadPhoto} width={40} className='absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <input
              disabled={isLoading}
              type="file"
              onChange={handleFileChange}
              ref={inputRef}
              className="file-input hidden"
            />
        </div>

        <div className="mt-5">
          <List data={data} />
        </div>
      </Card>
    </div>
  );
};

export default About;
