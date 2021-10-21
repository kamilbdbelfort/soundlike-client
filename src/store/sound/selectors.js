export const selectPopularSounds = (reduxState) => reduxState.sound.popular;
export const selectLatestSounds = (reduxState) => reduxState.sound.latest;
export const selectSearchedSounds = (reduxState) => reduxState.sound.searched;
export const selectFilteredSounds = (reduxState) => reduxState.sound.filtered;
export const selectAllCategories = (reduxState) => reduxState.sound.categories;
export const selectLoading = (reduxState) => reduxState.sound.loading;
