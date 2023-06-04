import React, { useState } from 'react';
import BatteryLayout from './BatteryLayout';
import { Container, Typography, TextField, Grid } from '@mui/material';
import megapack2XL from "./assets/images/megapack2xl.jpeg";
import megapack_2 from "./assets/images/megapack_2.jpeg";
import megapack from "./assets/images/megapack.jpeg";
import power_pack from "./assets/images/power_pack.jpeg";
import transformers from "./assets/images/transformers.jpeg";

const App = () => {
  const [batterys, setBatterys] = useState([
    {
      deviceName: 'megapack2XL',
      name: 'Megapack 2XL',
      dimension: '40FT x 10FT',
      energy: 4,
      cost: 120000,
      releaseDate: 2022,
      image: megapack2XL,
      count: 0
    },
    {
      deviceName: 'megapack2',
      name: 'Megapack 2',
      dimension: '30FT x 10FT',
      energy: 3,
      cost: 80000,
      releaseDate: 2021,
      image: megapack_2,
      count: 0
    },
    {
      deviceName: 'megapack',
      name: 'Megapack',
      dimension: '30FT x 10FT',
      energy: 2,
      cost: 50000,
      releaseDate: 2005,
      image: megapack,
      count: 0
    },
    {
      deviceName: 'powerpack',
      name: 'Powerpack',
      dimension: '10FT x 10FT',
      energy: 1,
      cost: 20000,
      releaseDate: 2000,
      image: power_pack,
      count: 0
    },
    {
      deviceName: 'transformer',
      name: 'Transformer',
      dimension: '10FT x 10FT',
      energy: -0.25,
      cost: 10000,
      releaseDate: '',
      image: transformers,
      count: 0
    }
  ]);

  return (
    <Container>
      <Typography variant="h4" sx={{ textAlign: "center", mb: 5, color: "red" }}>
        Tesla Industrial Energy Battery Site
      </Typography>
      < Grid container spacing={2} sx={{ mb: 5 }}>
        {batterys.map((item, index) => (
          <Grid item xs={2.4}>
            <TextField
              id="outlined-basic"
              label={item.name}
              variant="outlined"
              type="number"
              value={item.count}
              onChange={(e) => {
                item.count = parseInt(e.target.value)
                const newBatterys = batterys;
                newBatterys[index] = item;
                setBatterys([...newBatterys]);
              }}
            />
          </Grid>
        ))}
      </Grid >
      <BatteryLayout batterys={batterys} setBatterys={setBatterys} />
    </Container >
  );
};

export default App;