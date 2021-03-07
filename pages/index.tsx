import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "components/core/Link";

import Container from "components/core/Container";

import styles from "./index.module.css";

export default function Home() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>About Me</h1>
          <Paper className={styles.card}>
            Allow myself, to introduce... myself. My name is Damien Angelos and I'm a software engineer based in the
            Boston area. This site serves as a playground for testing out different technologies and is wholly
            over-engineered for its content.
          </Paper>
        </Grid>
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
              <Link href="/util/uuid" component={Button}>
                Go
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}