import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    maxWidth: "1200px",
    textAlign: "left",
    margin: "20px auto",
    padding: "0 40px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 20px",
    },
  }
}));

export default useStyles;
