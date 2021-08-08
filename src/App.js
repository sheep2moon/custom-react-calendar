import { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme';
import Calendar from './components/Calendar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='app'>
        <Calendar />
      </div>
    </ThemeProvider>
  );
}

export default App;
