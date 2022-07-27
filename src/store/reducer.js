import { combineReducers } from "redux";
import customer from "../features/customers/reducers";
import dashboard from "../features/dashboard/reducers";
import chat from "../features/chat/reducers";
import inbox from "../features/inbox/reducers";

export default combineReducers({ customer, dashboard, chat, inbox });
