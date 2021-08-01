import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => {
  return {
    card: {
      backgroundColor: "#eeeeee",
      padding: theme.spacing(2),
      marginBottom: theme.spacing(1.5)
    },
    cardInfo: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    fromAndToInfo: {
      display: "flex",
      flexDirection: "row"
    },
    transportAndTimeInfo: {
      color: "#757575",
      paddingTop: 4,
      fontStyle: "italic",
      marginRight: 4
    }
  };
});

export default useStyles;
