import styled, { ThemeProvider } from 'styled-components';
import { theme } from './commons/theme';
import Homepage from './components/Homepage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Homepage />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
`;
