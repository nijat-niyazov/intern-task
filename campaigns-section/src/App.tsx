import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { MainLayout } from './layouts';
import { Campaign, Customers, Email, FeedBack, Sms } from './pages';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="feedback" element={<FeedBack />} />
        <Route path="customers" element={<Customers />} />
        <Route path="campaigns" element={<Campaign />} />
        <Route path="sms" element={<Sms />} />
        <Route path="email" element={<Email />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
