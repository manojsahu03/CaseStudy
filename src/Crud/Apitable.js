// import { useState } from "react";
// import { useEffect } from "react";
// import axios from "axios";
// import React from "react";
// import Button from 'react-bootstrap/Button';
// function Apitable() {
//   const [Product, setProduct] = useState([]);
  
//   const fetchData = async () => {
//     const res = await axios.get(
//       "https://p-9x7e.onrender.com/products/products"
//     );
//     console.log(res.data);
//   };

//   //   Apitable();
//   return (
//     <div className="container">
//       <button onClick={fetchData}>fetch data</button>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Description</th>
//             <th>Price</th>
//             <th>product id</th>
//             <th>Image</th>
//             <Button variant="success">Add Task</Button>{' '}
            
            
//             </tr>
//         </thead>
//         <tbody>
//           {Product.map((element)=>{
//             return(
//               <tr>
//                 <td>{element.pName}</td>
//                 <td>{element.pDesc}</td>
//                 <td>{element.pPrice}</td>
//                 <td>{element._id}</td>
//                 <td ><img src=""/></td>
//               </tr>
//             )

//           })}
//         </tbody>
       
//       </table>
      
      

//     </div>

//   );
// }

// export default Apitable;
