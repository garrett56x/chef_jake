import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  sectionWrapper: {
    width: "100%"
  },
  title: {
    textTransform: "uppercase"
  },
  about: {
    display: "flex",
    textAlign: "left",
    padding: "40px",
    maxWidth: "1200px",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      flexFlow: "column",
      padding: "20px 0"
    }
  },
  photo: {
    width: "500px",
    alignSelf: "center",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  content: {
    padding: "0 20px"
  }
}));

export default useStyles;
