import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Suspense, useMemo } from 'react';
import { Provider } from 'react-redux';
import { lightTheme, darkTheme } from './themes/Themes';
import SiteRouter from './components/SiteRouter/SiteRouter';
import { GlobalStyles } from './themes/GlobalStyles';
import { useDarkMode } from './hooks/useDarkMode';
import { MyThemeContext } from './contexts/MyThemeContext';
import Loader from './components/Loader/Loader';
import { store } from './store/store';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const myThemeContextValue = useMemo(() => ({
    theme,
    themeToggler,
    mountedComponent,
  }));
  return (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles />
          <MyThemeContext.Provider value={myThemeContextValue}>
            <div className="App">
              <BrowserRouter>
                <SiteRouter />
              </BrowserRouter>
            </div>
          </MyThemeContext.Provider>
        </ThemeProvider>
      </Suspense>
    </Provider>
  );
}

export default App;
