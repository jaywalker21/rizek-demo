import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    buttonGroupRoot: {
      margin: theme.spacing(0, 0, 2),
      display: "flex",
      flexDirection: "row",
      width: "100%"
    },
    buttonRoot: {
      flexGrow: 1
    }
  };
});

export default useStyles;
