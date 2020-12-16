import React from "react";
import { Grid, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { BASICLAND_BG, SPECIAL_BG } from "../../../utility/constants";
/**
 * Represents a book.
 * @constructor
 */
const DetailCard = (props) => {
  const { componentID, details, lang } = props;
  const uniqueId = componentID + "_DetailCard";
  const basicLand = details && details.rarity === "Basic Land" ? `url(${BASICLAND_BG}) repeat-x bottom` : details && details.rarity === "Special" ? SPECIAL_BG : "none";
  return (
    details ? (
      <Grid 
        container 
        direction={details.rarity === "Rare" ? "row-reverse" : "row" } 
        alignItems="flex-start" 
        id={uniqueId+lang}
        style={{
            background: basicLand
        }}
    >
        <Grid container alignItems="center" justify="center" item xs={12} sm={4} md={3} lg={details.rarity === "Uncommon" ? 2 : 3}>
            <Box className="p_md m_before_xxl m_after_lg" style={{
                borderRadius: 4,
                width: "90%",
                background: details.colors[0] ? details.colors[0] : "cyan",
                color: details.colors[0] ? details.colors[0] === "White" ? "#212121" : "#fff" : "#212121",
            }}>
            <img src={details.imageUrl ? details.imageUrl : "https://via.placeholder.com/736x1024?text=No+Card+Image"} alt={"Card"} />
            {
                details.name ? <Typography component="h1" className="font fontBold fontSize_lg m_before_xxs" style={{color: details.colors[0] ? details.colors[0] === "White" ? "#212121" : "#fff" : "#212121"}}>{details.name}</Typography> : null
            }
            {
                details.artist ? <Typography component="div" className="font fontRegular fontSize_md" style={{color: details.colors[0] ? details.colors[0] === "White" ? "#212121" : "#fff" : "#212121"}}>By: {details.artist}</Typography> : null
            }
            </Box>
            {
                details.number ? <Typography component="div" className="font fontMedium fontSize_md p_xl p_before_xxxs p_after_xxxs m_after_xxs m_inline_xxs" style={{
                    display: "inline-block",
                    borderRadius: 32,
                    background: "#ffffff",
                    color: "#000",
                }}>{details.number}</Typography> : null
            }
            {
                details.type ? <Typography component="div" className="font fontMedium fontSize_md p_xl p_before_xxxs p_after_xxxs m_after_xxs m_inline_xxs" style={{
                    display: "inline-block",
                    borderRadius: 32,
                    background: "#ffffff",
                    color: "#000",
                }}>{details.type}</Typography> : null
            }
            {
                details.set ? <Typography component="div" className="font fontMedium fontSize_md p_xl p_before_xxxs p_after_xxxs m_after_xxs m_inline_xxs" style={{
                    display: "inline-block",
                    borderRadius: 32,
                    background: "#ffffff",
                    color: "#000",
                }}>{details.set}</Typography> : null
            }
            {
                details.setName ? <Typography component="div" className="font fontMedium fontSize_md p_xl p_before_xxxs p_after_xxxs m_after_xxs m_inline_xxs" style={{
                    display: "inline-block",
                    borderRadius: 32,
                    background: "#ffffff",
                    color: "#000",
                }}>{details.setName}</Typography> : null
            }
            {
                details.multiverseid ? <Typography component="div" className="font fontMedium fontSize_md p_xl p_before_xxxs p_after_xxxs m_after_xxs m_inline_xxs" style={{
                    display: "inline-block",
                    borderRadius: 32,
                    background: "#ffffff",
                    color: "#000",
                }}>{details.multiverseid}</Typography> : null
            }
        </Grid>
        <Grid item xs={12} sm={8} md={9} lg={details.rarity === "Uncommon" ? 10 : 9}>
            <Box style={{
                padding: 32
            }}>
            {
                details.text ? <Typography component="div" className="font fontThin m_before_lg fontSize_lg" >{details.text}</Typography> : null
            }
            {
                details.foreignNames && details.foreignNames.length > 0 
                ? (
                    <Grid className="p_xs m_before_md" container alignItems="center">
                        {
                            details.foreignNames.map(
                                (value, index) => {
                                    return (
                                        <Grid item xs={details.rarity === "Common" ? 12 : 6} className="p_sm" key={"_"+index}>
                                            {
                                                value.language ? <Typography component="div" className="font fontBold fontSize_md">{value.language}</Typography> : null
                                            }
                                            {
                                                value.multiverseid ? <Typography component="div" className="font fontLight fontSize_md m_before_xs">{value.multiverseid}</Typography> : null
                                            }
                                            {
                                                value.name ? <Typography component="div" className="font fontLight fontSize_md m_before_xs">{value.name}</Typography> : null
                                            }
                                            {
                                                value.flavor ? <Typography component="div" className="font fontLight fontSize_md m_before_xs">{value.flavor}</Typography> : null
                                            }
                                            {
                                                value.text ? <Typography component="div" className="font fontLight fontSize_md m_before_xs">{value.text}</Typography> : null
                                            }
                                        </Grid>
                                    ) ;
                                }
                            )
                        }
                    </Grid>
                ) : null
            }
            </Box>
        </Grid>
      </Grid>
      )
    : null
  );
};

DetailCard.propTypes = {
  componentID: PropTypes.string.isRequired,
  details: PropTypes.object,
  lang: PropTypes.string
};

export default DetailCard;
