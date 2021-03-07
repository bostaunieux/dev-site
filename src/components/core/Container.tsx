import MuiContainer from "@material-ui/core/Container";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => <MuiContainer maxWidth="md">{children}</MuiContainer>;

export default Container;
