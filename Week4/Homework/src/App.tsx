import { Fragment } from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { Theme } from './styles/Theme';
import router from './router';

const App = () => {
  return (
    <Fragment>
      {/* 나의스타일테마 적용 */}
      <ThemeProvider theme={Theme}>
        {/* router로 불러오기 */}
        <RouterProvider router={router} />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;