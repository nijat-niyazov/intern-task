import { Provider } from 'react-redux';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import SmsThread from './components/threads/SmsThread';
import { MainLayout } from './layouts';
import { Campaign, Email, Sms } from './pages';
import { store } from './redux/store';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="campaigns" element={<Campaign />} />
        <Route path="sms" element={<Sms />} />
        <Route path="email" element={<Email />} />
        <Route path="sms_thread" element={<SmsThread />} />
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
