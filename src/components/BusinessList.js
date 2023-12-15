import React from "react";
import Business from "./Business";
// Material UI styling
import Grid from "@mui/material/Grid";

function BusinessList(props) {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {props.businesses.map((business, index) => {
        return (
          <Grid item xs={12} md={4}>
            <Business businessObject={business} key={business.name + index} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BusinessList;
