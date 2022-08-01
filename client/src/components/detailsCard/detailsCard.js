import { Card, CardContent } from "@mui/material";
import { Typography } from "@mui/material";
import mockData from "../../data";

function DetailsCard() {
  return (
    <>
      <Card>
        <Typography type="headline" variant="body1">
          Affidavit No {mockData.PARTA_TRANSACTION.AFFIDAVITNO}
        </Typography>
        <CardContent>
          <Typography variant="body 1">Company(s):</Typography>
          <Typography variant="body 2">
            {mockData.PARTA_TRANSACTION.COMPANY.COMPANYNUMBER} -{" "}
            {mockData.PARTA_TRANSACTION.COMPANY.COMPANYNAME}
          </Typography>
          <Typography variant="body 1">Coverage:</Typography>
          <Typography variant="body 2">
            {mockData.PARTA_TRANSACTION.COVERAGE}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default DetailsCard;
