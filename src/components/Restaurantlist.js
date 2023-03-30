/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Restcard from './Restcard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestListAction } from '../actions/restactionlist';
import { useDispatch, useSelector } from 'react-redux';
function Restaurantlist() {

// const [restaurantlist,setRestaurantlist]=useState([])

//create function to call API

// const getRestaurant=async()=>{

//     await fetch('/restaurants.json') //Async call
//     .then((data)=>data.json()
//         .then((result)=>setRestaurantlist(result.restaurants)))
//         // console.log(data);
// }
// console.log(restaurantlist);

//To create a function for API Call ---
const dispatch = useDispatch()

const result = useSelector(state=>state.restReducer)
console.log(result);


useEffect(()=>{
    // getRestaurant();
    dispatch(RestListAction())
},[])



 return (
    <Row>
      {
         result.restList.map((item)=>(
          <Restcard  restaurant={item}/>
        ))
       
      }
    </Row>
   
  )
}
export default Restaurantlist
