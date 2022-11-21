import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const OneCountry = ({
  name: { common, official, nativeName },
  capital,
  area,
  languages,
  flags,
  coatOfArms,
  maps,
}) => {
   const {official: officialName, common: commonName} = Object.values(nativeName)[0];

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        sx={{mt: 2}}
      >
        <Card sx={{ width: 400, borderRadius: 10 }}>
          <CardContent>
            <>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              <h2>
                Common Name: <i style={{ color: "blue" }}>{common}</i>
              </h2>
            </Typography>
            <Typography variant='h5' component='div'>
              <h3>
                Official Name: <i style={{ color: "blue" }}>{official}</i>
              </h3>
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              <p>
                <b>Capital:</b>
                <i style={{ color: "blue" }}> {capital}</i>
              </p>
            </Typography>
            <Typography variant='body2'>
              <h4>Languages:</h4>
              <p>
                {Object.values(languages).map((lang) => (
                  <li style={{ color: "blue" }} key={lang}>{lang}</li>
                ))}
              </p>
            </Typography>
            <Typography>
              <h1>
                <img src={flags?.png} alt='img' />
              </h1>
            </Typography>
            <Typography>
              <h4>Coat of Arms</h4>
              <h1>
                <img src={coatOfArms?.png} alt='*Seems like no img' width={100} />
              </h1>
            </Typography>
            </>
          </CardContent>
        </Card>
      </Grid>

      <h3>Common Name: <i style={{ color: "blue" }}>{commonName}</i></h3>
      <h3>Official Name: <i style={{ color: "blue" }}>{officialName}</i></h3>
      <h1 style={{fontSize: 150, marginTop: -30, marginBottom: -20,}}><a href={maps?.openStreetMaps} alt="url" target="_blank" rel="noreferrer" style={{textDecoration: "none"}}>🗺️</a></h1>
    </div>
  );
};

export default OneCountry;
