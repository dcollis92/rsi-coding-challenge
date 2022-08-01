import AffidavitTable from "./components/affidavitTable/affidavitTable";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import theme from "./Theme";


function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h6">Affidavits</Typography>
        <AffidavitTable />
      </ThemeProvider>
    </>
  );
}

export default App;
