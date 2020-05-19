import * as types from '../actions/ActionTypes';

const initialState = {
   counters: [
      {
         color: 'black',
         number: 0
      }
   ]
};

function counter( state = initialState, action){
   const { counters } = state;

   switch(action.type){
      case types.CREATE : 
         return {
            counters: [
               ...counters,
               {
                  color: action.color,
                  number: 0
               }
            ]
         }
         case types.INCREMENT :
            console.log("...counters",counters[action.index].number);
            console.log("action.index",action.index);
            return{
               counters: [
                  ...counters.splice(0,action.index),
                  {
                     ...counters[action.index],
                     number: counters[action.index].number +1
                  },
                  ...counters.splice(action.index+1, counters.length)
               ]
            }
            case types.DECEMENT :
               return{
                  counters: [
                     ...counters.splice(0,action.index),
                     {
                        ...counters[action.index],
                        number: counters[action.index].number -1
                     },
                     ...counters.splice(action.index+1, counters.length)
                  ]
               }
               case types.SET_COLOR :
                  return{
                     counters: [
                        ...counters.splice(0,action.index),
                        {
                           ...counters[action.index],
                           color: action.color
                        },
                        ...counters.splice(action.index+1, counters.length)
                     ]
                  }
                  case types.REMOVE :
                     return{
                        counters: counters.splice(0,counters.length-1)
                     }
                     default:
                        return state;
   }
}

export default counter;