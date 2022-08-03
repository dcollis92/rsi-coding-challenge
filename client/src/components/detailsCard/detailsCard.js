import { Card, CardContent, CardHeader } from "@mui/material";
import { Typography } from "@mui/material";

function DetailsCard({ PARTA_TRANSACTION }) {
  return (
    <>
      <Card>
        <Typography type="headline" variant="body1">
          Affidavit No {PARTA_TRANSACTION.AFFIDAVITNO}
        </Typography>
        <CardContent>
          <Typography variant="subtitle1">Company(s): </Typography>
          <Typography variant="body2">
            {PARTA_TRANSACTION.COMPANY[0].COMPANYNUMBER} -{" "}
            {PARTA_TRANSACTION.COMPANY[0].COMPANYNAME}
          </Typography>
          <Typography variant="subtitle1">Coverage: </Typography>
          <Typography variant="body2">{PARTA_TRANSACTION.COVERAGE}</Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DetailsCard;
