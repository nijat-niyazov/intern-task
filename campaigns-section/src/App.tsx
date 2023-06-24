import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { TableData } from './components';
import SmsThread from './components/threads/sms';
import MainLayout from './layouts/app';
import CampaignPagesLayout from './pages/campaigns';
import Licensing from './pages/settings/licensing';
import { store } from './redux/store';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="campaigns" element={<CampaignPagesLayout />}>
          <Route path=":section" element={<TableData />} />
        </Route>

        <Route path="sms_thread" element={<SmsThread />} />
        <Route path="settings/licensing" element={<Licensing />} />
        
      </Route>
    )
  );

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
