import { combineReducers } from "redux";
import { cardsAll } from "./cardsAll";
import { currentCard } from "./currentCard";
import { cardMessage } from "./cardMessage";
import { user } from "./user";
import { listsAll } from "./listsAll";
import { currentList } from "./currentList";
import { shoppingCart } from "./shoppingCart";
import { categoriesAll } from "./categoriesAll";
import { tagsAll } from "./tagsAll";
import { currentCategory } from "./currentCategory";
import { currentTag } from "./currentTag";
import { signature } from "./signature";

const cardTastukApp = combineReducers({
  cardsAll,
  currentCard,
  cardMessage,
  user,
  listsAll,
  currentList,
  shoppingCart,
  categoriesAll,
  tagsAll,
  currentCategory,
  currentTag,
  signature
});

export default cardTastukApp;
