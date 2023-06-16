export const selectBooks = (store) => store.books.items;
export const selectBookDetails = (store) => store.books.book;
export const selectTotalNumber = (store) => store.books.totalNumber;
export const selectStartIndex = (store) => store.books.startIndex;
export const selectError = (store) => store.books.error;
export const selectIsLoading = (store) => store.books.isLoading;
export const selectIsDetailsShown = (store) => store.books.isDetailsShown;
