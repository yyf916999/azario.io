import React from "react";
import Slider from "@mui/material/Slider";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
interface Props {
  max: number;
  heading: string;
}
const SliderBars = ({ max, heading }: Props) => {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Grid container spacing={2} sx={{ ml: 45, mt: 3 }}>
          <Grid item xs={2}>
            {heading}
          </Grid>
          <Grid item xs={9}>
            <Slider
              arial-label="Small"
              defaultValue={1}
              valueLabelDisplay="on"
              sx={{
                width: 700,
                color: "success.main",
              }}
              min={1}
              max={max}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SliderBars;
