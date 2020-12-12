import React from "react";

import PageWrapper from "../../Components/PageWrapper";
import MaxWidth from "../../Components/MaxWidth";
import Loader from "../../Components/Loader";
import Disclaimer from "../../Components/Disclaimer";
import IntroCard from "../../Components/Cards/IntroCard";
import Filters from "../../Components/Filters";
import ErrorCard from "../../Components/Cards/ErrorCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import axios from "../../utility/axios";
import * as actions from "../../store/actions/allCards";
import {ThemeContext} from "../../Context/theme";

import { 
  Grid, 
  Button,
  Box, 
  Typography,
} from "@material-ui/core";

import Pagination from "@material-ui/lab/Pagination";

import {
  NONE_TEXT,
  HOMEPAFE_DISCLAIMER_TEXTS,
  FILTERS
} from "../../utility/constants";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "English",
      colors: null,
      supertypes: null,
      filters: {
        pageSize: 12,
        pageNumber: 1,
        colors: null,
        supertypes: null,
        rarity: null,
        name: null
      },
    };
  }
  componentDidMount() {
    this.props.onFetchCards(this.state.lang, {
      pageSize: 12,
      pageNumber: 1,
      colors: null,
      supertypes: null,
      rarity: null,
      name: null
    });
  }
  
  clearFilter() {
    this.setState(
      {
        filters: {
          pageSize: 12,
          pageNumber: 1,
          colors: null,
          supertypes: null,
          rarity: null,
          name: null
        },
      },
      () => {
        this.props.onFetchCards(this.state.lang, this.state.filters);
      }
    );
  }

  setFilter(value, type) {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          [type]: value,
        },
      },
      () => {
        this.props.onFetchCards(this.state.lang, this.state.filters);
      }
    );
  }

  handleChangePagination = (event, value) => {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          pageNumber: value,
        },
      },
      () => {
        this.props.onFetchCards(this.state.lang, this.state.filters);
      }
    );
  };
  
  render() {
    const pageID = "home";
    const $thisContent = this.context;

    return (
      <>
        <PageWrapper
          componentID={pageID}
          footerMiddleChild={
            this.props.totalCount && (
              <Pagination
                page={this.state.filters.pageNumber}
                onChange={this.handleChangePagination}
                count={Math.ceil(parseInt(this.props.totalCount) / this.props.filter.pageSize)}
                color="secondary"
                size="small"
                className={"font fontBold fontSize_sm"}
                boundaryCount={1} 
                showLastButton
              />
            )
          }
          searchHandler={
            (value, type) => {
              this.setFilter(value , type);
            }
          }
        >
          <MaxWidth componentID={pageID}>
            <Grid container direction="row" alignItems="flex-start">
              <Grid 
                className={`${$thisContent.isFilterOpen ? "isOpen" : "isClose"} fliters`} 
                item xs={12} sm={4} md={3} lg={2}
                style={{
                  background: $thisContent.theme.middleground
                }}
              >
                <Box
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography component="h2" className="font fontBold fontSize_lg" >Filters</Typography>
                  <Button
                    onClick={() => {
                      this.clearFilter();
                    }}
                    size="small"
                    variant="contained"
                    color="secondary"
                  >
                    {"Clear"}
                  </Button>
              </Box>

                <Filters componentID={pageID} filters={FILTERS} onChangeHandler={(event, value, type) => { 
                  if(type === "colors"){
                    this.setFilter( value === NONE_TEXT ? null  : value.map((val) => val) , type );
                  }
                  else {
                    this.setFilter( value === NONE_TEXT ? null  : value , type );
                  }
                 }} />

              </Grid>
              <Grid item xs={12} sm={8} md={9} lg={10}>
                <Grid container>
                  {this.props.loading ? (
                    <Loader componentID={pageID} />
                  ) : (
                    this.props.cards && Object.values(this.props.cards).length > 0 ? (
                      Object.values(this.props.cards).map((card, index) => {
                        return (
                          <Grid key={index} item xs={6} sm={6} md={4} lg={2} xl={2} className="IntroCard_container">
                            <IntroCard
                              componentID={pageID + "_" + index}
                              card={card}
                            />
                          </Grid>
                        );
                      })
                    ) : (
                      <Grid item xs={12} className="noCards_container p_before_xxl p_after_xxl" container alignItems="center" justify="center">
                        <ErrorCard componentID={pageID} />
                      </Grid>
                    )
                  )}
                </Grid>
                <Disclaimer
                  id={pageID}
                  disclaimers={HOMEPAFE_DISCLAIMER_TEXTS}
                />
              </Grid>
            </Grid>
          </MaxWidth>
        </PageWrapper>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state.magicCards.cards,
    lang: state.magicCards.lang,
    loading: state.magicCards.loading,
    totalCount: state.magicCards.totalCount,
    filter: state.magicCards.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCards: (lang, filters) => dispatch(actions.fetchCards(lang, filters)),
  };
};

Home.propTypes = {
  onFetchCards: PropTypes.func,
  cards: PropTypes.object,
  lang: PropTypes.string,
  loading: PropTypes.bool,
  totalCount: PropTypes.number,
  filter: PropTypes.object,
};
// export default withStyles(styles)(
//   connect(mapStateToProps, mapDispatchToProps)(Home, axios)
// )
Home.contextType = ThemeContext;
export default connect(mapStateToProps, mapDispatchToProps)(Home, axios);
