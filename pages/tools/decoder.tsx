import React from "react";
import { Button, TextareaAutosize } from "@material-ui/core";
import styles from "./decoder.module.css";

const Decoder = () => {
  const textAreaRef = React.createRef<HTMLTextAreaElement>();

  const encode = React.useCallback(() => {
    if (textAreaRef.current) {
      const encodedValue = encodeURIComponent(textAreaRef.current.value).replace(/'/g, "%27").replace(/"/g, "%22");
      textAreaRef.current.value = encodedValue;
    }
  }, [textAreaRef]);

  const decode = React.useCallback(() => {
    if (textAreaRef.current) {
      const decodedValue = decodeURIComponent(textAreaRef.current.value.replace(/\+/g, " "));
      textAreaRef.current.value = decodedValue;
    }
  }, [textAreaRef]);

  return (
    <>
      <h1>URL Encoder / Decoder</h1>

      <p>URL encode or decode text. </p>

      <TextareaAutosize
        ref={textAreaRef}
        aria-label="Text to encode or decode"
        rowsMin={4}
        placeholder="Enter text to encode or decode"
      />

      <div className={styles.button}>
        <Button variant="contained" color="primary" onClick={encode}>
          Encode
        </Button>
      </div>
      <div className={styles.button}>
        <Button variant="contained" color="primary" onClick={decode}>
          Decode
        </Button>
      </div>
    </>
  );
};

export default Decoder;
