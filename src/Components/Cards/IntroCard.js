import React from "react";
import { ThemeContext } from "../../Context/theme";
import { Box, Typography, Card } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Link
} from "react-router-dom";

const styles = (theme) => ({
  root: {
    maxWidth: "100%",
    height: '100%'
  },
  card: {
    position: "relative",
    maxWidth: "100%",
    padding: "16px 16px 16px 48px",
    height: '100%',
    border: '2px solid rgba(0, 0, 0, 1)'
  },
  cardHeading: {
    borderRight: `1px solid rgba(0, 0, 0, 0.2)`,
    boxShadow: `0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)`,
  },
  media: {
    width: `100%`,
    padding: "0px",
    borderRadius: 16,
  },
  mediaImage: {
    width: `100%`,
    height: `auto`,
  },
});
class IntroCard extends React.Component {
  render() {
    const { componentID, card, classes } = this.props;
    const uniqueId = componentID + "_IntroCard";
    let $thisContext = this.context;
    return (
      <Box className={`IntroCard ${classes.root}`} id={uniqueId}>
        <Card
          className={`card ${classes.card}`}
          style={{
            background: $thisContext.theme.background ? $thisContext.theme.background : '#000'
          }}
        >
          <Box className={classes.media}>
            <img
              className={classes.mediaImage}
              src={
                card.imageUrl
                  ? card.imageUrl
                  : "https://via.placeholder.com/736x1024?text=No+Card+Image"
              }
              alt={card.name + "Image"}
            />
            <Link
              style={{
                background: card.colors[0] ? card.colors[0] : "cyan",
                color:
                  card.colors[0] && card.colors[0] !== "White"
                    ? "#fff"
                    : "#000",
              }}
              className={`cardHeading ${classes.cardHeading}`}
              aria-label={card.name}
              to={`/${card.id}`}
            >
              <span className="font fontMedium fontSize_sm p_xxxs p_after_xs p_before_xs">
                {card.name}
              </span>
            </Link>
          </Box>

          <Box>
            <Typography
              className="cardDescription font fontLight fontSize_sm p_before_xxs p_after_xxs"
              variant="body1"
              component="p"
              style={{
                color: $thisContext.theme.foreground,
              }}
            >
              {card.text}
            </Typography>
          </Box>
        </Card>
      </Box>
    );
  }
}
IntroCard.contextType = ThemeContext;
export default withStyles(styles)(IntroCard);
