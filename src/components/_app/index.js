import Layout from '../_layout/';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import CustomThemeProvider from './theme';
import store from '../../redux/store';
import FetchSignedInUser from './fetcher';

function App() {
  return (
    <Provider store={store}>
      <FetchSignedInUser/>
      <CustomThemeProvider>
        <CssBaseline />
        <Layout/>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
