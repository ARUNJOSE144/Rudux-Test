const commonAction = (commonObj, flag) => ({
  type: flag,
  payload: commonObj,
  actionType: "COMMON_ACTION"
});


const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});


const addBook = book => ({
  type: "ADD_BOOK",
  payload: book
});


const deleteArticle = book => ({
  type: "DELETE_ARTICLE",
  payload: book
});


export {
  commonAction,
  addArticle,
  addBook,
  deleteArticle
};