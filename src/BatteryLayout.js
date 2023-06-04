import * as React from "react";
import { Typography, Grid, Box, CardMedia, CardContent, Card, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const BatteryLayout = ({ batterys, setBatterys }) => {
    let totalPrice = 0;
    let totalLandSize = 0;
    let totalEnergy = 0;
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: "center", mb: 3 }}>
                Battery Layout
            </Typography>
            < Grid container spacing={2} sx={{ mb: 3 }}>
                {batterys.map((item, index) => {
                    totalPrice += item.count * item.cost;
                    totalLandSize += item.count * parseInt(item.dimension.split('FT')[0]);
                    totalEnergy += item.count * item.energy;
                    return (
                        < Grid item xs={4} key={index} >
                            <Card sx={{ display: "flex" }}>
                                <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                                    <CardContent sx={{ flex: "1 0 auto" }}>
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            component="div"
                                        >
                                            Name: {item.name}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Dimension: {item.dimension}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Energy: {item.energy}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            Cost: ${item.cost}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            component="div"
                                        >
                                            ReleaseDate: {item.releaseDate}
                                        </Typography>
                                        <Box>
                                            <Button variant="text"
                                                onClick={() => {
                                                    if (item.count > 0) {
                                                        item.count = parseInt(item.count) - 1
                                                        const newBatterys = batterys;
                                                        newBatterys[index] = item;
                                                        setBatterys([...newBatterys]);
                                                    }
                                                }}
                                            >
                                                <RemoveIcon />
                                            </Button>
                                            {item.count}
                                            <Button variant="text"
                                                onClick={() => {
                                                    item.count = parseInt(item.count) + 1
                                                    const newBatterys = batterys;
                                                    newBatterys[index] = item;
                                                    setBatterys([...newBatterys]);
                                                }}
                                            >
                                                <AddIcon />
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Box>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 151 }}
                                    image={item.image}
                                    alt="Megapack 2XL"
                                />
                            </Card>
                        </Grid>
                    )
                })}
            </Grid >
            <Box>
                <Typography variant="body1" color="black" component="div">
                    Total Price: ${totalPrice}
                </Typography>
                <Typography variant="body1" color="black" component="div">
                    Total Land Size: {totalLandSize}FT
                </Typography>
                <Typography variant="body1" color="black" component="div">
                    Total Energy: {totalEnergy}MWh
                </Typography>
            </Box>
        </>
    );
};

export default BatteryLayout;