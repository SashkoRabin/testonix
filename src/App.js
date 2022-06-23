import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMemo } from 'react';
import { lightTheme, darkTheme } from './themes/Themes';
import SiteRouter from './components/SiteRouter/SiteRouter';
import { GlobalStyles } from './themes/GlobalStyles';
import { useDarkMode } from './hooks/useDarkMode';
import { MyThemeContext } from './contexts/MyThemeContext';

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const myThemeContextValue = useMemo(() => ({
    theme,
    themeToggler,
    mountedComponent,
  }));
  return (
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
  );
}

export default App;
