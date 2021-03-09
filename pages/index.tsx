import React from "react";
import NextLink from "next/link";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              UUID Generator
            </Typography>
            <Typography variant="body2" component="p">
              Simple utility for generating random UUID values.
            </Typography>
          </CardContent>
          <CardActions>
            <NextLink href="/util/uuid" passHref>
              <Button component="a">Visit</Button>
            </NextLink>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
