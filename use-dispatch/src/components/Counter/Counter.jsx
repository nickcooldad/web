import { useState } from "react";
import { useSelector } from "../../react-redux";

export function Counter(){
  const state = useSelector(state => state)
  
  return <div>
    {state}
  </div>

}