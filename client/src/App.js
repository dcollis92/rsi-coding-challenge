import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6">RSI Coding Challenge</Typography>
    </ThemeProvider>
  );
}

export default App;
