/* eslint-disable default-case */
import { R_FAIL,R_SUCCESS } from "../constants/restconstants";

{/* reducer function*/}
export const restlistReducer=(state={restList :[]},action)=>{

    switch(action.type)
    {
        case R_SUCCESS : 
        return {
            restList:action.payload
        }
        case R_FAIL :
            return {
                restList : action.error
            }
        default : 
        return state
    }
}