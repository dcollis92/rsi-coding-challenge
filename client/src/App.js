import { ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import theme from './Theme';
import mockData from './data';
import { MaterialTable } from 'material-table';


function App() {
  const columns = [
    { title: 'Affidavit No', field: 'AFFIDAVITNO', type: 'string' },
    { title: 'Policy No', field: 'POLICYNO', type: 'string' },
    { title: 'Insured Name', field: 'RISKINSUREDNAME', type: 'string' },
    { title: 'Type', field: 'TRANSACTIONTYPE', type: 'string' },
    { title: 'Premium', field: 'AMOUNT', type: 'currency' },
    { title: 'Inception', field: 'EFFECTIVEDATE', type: 'date' },
    { title: 'Expiration', field: 'EXPIRATIONDATE', type: 'date' },
    { title: 'Batch', field: 'BATCHID', type: 'number' },
    { title: 'Submitted', field: 'RECIEVEDATE', type: 'date' },
    { title: 'Proc State', field: 'PROCESSEDSTATE', type: 'string' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h6">RSI Coding Challenge</Typography>
      <MaterialTable
        data={mockData}
        columns={columns}
        options={{
          search: true,
          columnsButton: true,
          exportButton: true,
          filtering: true,
          sorting: true,
          pageSize: 10,
          pageSizeOptions: [10,25,50,100]
        }}
      />
    </ThemeProvider>
  );
}

export default App;


