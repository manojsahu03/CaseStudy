import React, {useState,setState} from 'react';
import './Style.css'
function Register() {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [mobileNo,setMobileNumber]=useState(null);
    const [date,setDate] = useState(null);
    const [prizerange,setPrizeRange] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "mobileNo"){
          setMobileNumber(value);
      }
        if(id === "date1"){
            setDate(value);
        }
        if(id === "prizerange"){
            setPrizeRange(value);
        }

    }

    const handleSubmit  = () => {
        console.log(firstName,lastName,email,date,prizerange);
    }

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={firstName} minLength="5" onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="MobileNo">
                    <label className="form__label" for="mobileNo">Mobile Number </label>
                    <input  type="number" id="mobileNo" minLength={10}  className="form__input" required value={mobileNo} onChange = {(e) => handleInputChange(e)} placeholder="Enter Your Mobile No"/>
                </div>
                <div className="date1">
                    <label className="form__label" for="date1">Date </label>
                    <input className="form__input" type="date" id="date1" value={date} onChange = {(e) => handleInputChange(e)} placeholder="Date"/>
                </div>
                <div className="prizerange">
                    <label className="form__label" for="prizerange">Price Range </label>
                    <input className="form__input" type="range" id="prizerange" min={"1000"}max={5000} value={prizerange} onChange = {(e) => handleInputChange(e)} placeholder="prizerange"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
        </div>
       
    )       
}

export default Register;