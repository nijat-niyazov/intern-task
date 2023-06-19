import { FC } from 'react';
import BodyOfPageLayout from './body';
import HeaderOfPageLayout from './header';

const PageLayout: FC = () => {
  return (
    <>
      <HeaderOfPageLayout />
      <BodyOfPageLayout />
    </>
  );
};

export default PageLayout;
