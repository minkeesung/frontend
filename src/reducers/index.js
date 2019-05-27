import {combineReducers} from 'redux';
import projectReducer from './project_reducer'
import searchReducer from './search_reducer'
import categoryReducer from './category_reducer'
import sessionReducer from './session_reducer'
import errorReducer from './error_reducer'
import rewardReducer from './reward_reducer'
import pledgeReducer from './pledge_reducer'

export default combineReducers({
  projects: projectReducer,
  search: searchReducer,
  categories: categoryReducer,
  session: sessionReducer,
  errors: errorReducer,
  rewards: rewardReducer,
  pledges: pledgeReducer
})
