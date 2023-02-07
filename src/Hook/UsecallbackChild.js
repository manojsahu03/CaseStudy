import React  from "react";
import {memo} from "react";
function UsecallbackChild({callFun}){
    
    console.log("child component rendering");
    return<div></div>;
}
export default memo(UsecallbackChild);