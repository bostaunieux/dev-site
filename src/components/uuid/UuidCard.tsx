import React from "react";

import { Button, Hidden, Paper, Tooltip, Typography } from "@material-ui/core";
import CopyIcon from "@material-ui/icons/FileCopy";

import styles from "./UuidCard.module.css";

interface Props {
  uuid: string;
}

const UuidCard = ({ uuid }: Props) => {
  const [copied, setCopied] = React.useState<boolean>(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(uuid);
      setCopied(true);
    } catch (e) {
      console.warn("Failed to copy to clipboard");
    }
  };

  return (
    <Paper elevation={3}>
      <div className={styles.container}>
        <div className={styles.value}>
          <Hidden mdUp>
            <Typography variant="h5">{uuid}</Typography>
          </Hidden>
          <Hidden smDown>
            <Typography variant="h4">{uuid}</Typography>
          </Hidden>
        </div>
        <div className={styles.copyButton}>
          <Tooltip open={copied} onClose={() => setCopied(false)} title="Copied!">
            <Button variant="outlined" size="small" startIcon={<CopyIcon />} onClick={onClick}>
              Copy
            </Button>
          </Tooltip>
        </div>
      </div>
    </Paper>
  );
};

export default UuidCard;
