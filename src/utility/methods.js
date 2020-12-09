export const arrayUpdater = (oldArray, newValue) => {
  let newArray;
  if (oldArray.includes(newValue)) {
    newArray = oldArray.splice(oldArray.indexOf(newValue), 1);
  } else {
    newArray = oldArray.concat(newValue);
  }
  return newArray;
};
export const isSameArray = (planet, earth) => {
  let isInhabitable =
    planet.length === earth.length &&
    earth.every(function (element, index) {
      return planet.includes(element);
    });
  return isInhabitable;
};
export const setArrayFilter = (activeFilters, newFilter, type) => {
  let newArrayFilter = arrayUpdater(activeFilters, newFilter);
  if (!isSameArray(activeFilters, newArrayFilter)) {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          [type]: newArrayFilter,
        },
      },
      () => {
        this.props.onFetchCards(this.state.lang, this.state.filters);
      }
    );
  }
}