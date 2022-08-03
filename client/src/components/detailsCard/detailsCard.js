import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";

function DetailsCard({ PARTA_TRANSACTION }) {
  return (
    <>
      <Card>
        <Typography type="headline" variant="body1">
          Affidavit No {PARTA_TRANSACTION.AFFIDAVITNO}
        </Typography>
        <CardContent>
          <Typography variant="body 1">Company(s):</Typography>
          <Typography variant="body 2">
            {PARTA_TRANSACTION.COMPANY.COMPANYNUMBER} -{" "}
            {PARTA_TRANSACTION.COMPANY.COMPANYNAME}
          </Typography>
          <Typography variant="body 1">Coverage:</Typography>
          <Typography variant="body 2">{PARTA_TRANSACTION.COVERAGE}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DetailsCard;
