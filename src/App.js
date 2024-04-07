import Routers from './components/Routers/Routers';
import { Reset } from 'styled-reset';
import GlobalStyle from './theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';
import './assets/style/style.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Reset />
        <GlobalStyle />
        <Routers />
      </div>
    </ThemeProvider>
  );
}

export default App;
