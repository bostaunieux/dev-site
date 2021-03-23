import React from "react";
import NextLink from "next/link";
import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import routes from "components/core/routes";

export default function Home() {
  return (
    <Grid container spacing={3}>
      <Grid item sm={6} xs={12}>
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
            <NextLink href={routes.TOOLS_UUID_GEN} passHref>
              <Button component="a">Visit</Button>
            </NextLink>
          </CardActions>
        </Card>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              URL Encoder / Decoder
            </Typography>
            <Typography variant="body2" component="p">
              Simple utility for url encode or decode a block of text.
            </Typography>
          </CardContent>
          <CardActions>
            <NextLink href={routes.TOOLS_DECODER} passHref>
              <Button component="a">Visit</Button>
            </NextLink>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
