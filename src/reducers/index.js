import number from './number';
import color from './color';

import { combineReducers } from 'redux';

const reducer = combineReducers({
   numberData: number,
   colorData: color
});

export default reducer;