import MuiContainer from "@material-ui/core/Container";
import styles from "./Container.module.css";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => (
  <MuiContainer maxWidth="md">
    <div className={styles.container}>{children}</div>
  </MuiContainer>
);

export default Container;
