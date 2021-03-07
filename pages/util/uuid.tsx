import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "@material-ui/core/Button";
import Container from "components/layout/Container";
import UuidCard from "components/uuid/UuidCard";

import styles from "./uuid.module.css";

export const getServerSideProps = () => {
  return {
    props: {
      uuid: uuidv4(),
    },
  };
};

interface Props {
  uuid: string;
}

const UUID = ({ uuid }: Props) => {
  const [currentUuid, setCurrentUuid] = React.useState<string>(uuid);

  const generateUuid = async () => {
    try {
      const res = await fetch("/api/uuid?version=4");
      const { uuid: newUuid } = await res.json();
      setCurrentUuid(newUuid);
    } catch (e) {}
  };

  return (
    <>
      <Container>
        <h1>UUID Generator</h1>

        <UuidCard uuid={currentUuid} />

        <div className={styles.button}>
          <Button variant="contained" color="primary" onClick={generateUuid}>
            Generate new UUID
          </Button>
        </div>
      </Container>
    </>
  );
};

export default UUID;
