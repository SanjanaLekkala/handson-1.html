// import React, { useState,useEffect } from 'react';
// import React,{Component} from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from 'axios';

// class Events extends Component{
//     constructor(){
//         super()
//         this.state={
//             username:'',
//             email:'',
//             phone:''
//         }
//         this.changeUsername = this.changeUsername.bind(this)
//         this.changeEmail = this.changeEmail.bind(this)
//         this.changePhone = this.changePhone.bind(this)
//         this.onSubmit = this.onSubmit.bind(this)
//     }

//     changeUsername(event){
//         this.setState({
//             username:event.targte.value
//         })
//     }
//     changeEmail(event){
//         this.setState({
//             email:event.targte.value
//         })
//     }
//     changePhone(event){
//         this.setState({
//             phone:event.targte.value
//         })
//     }

//     onSubmit(event){
//         event.preventDefault()
//         const registered = {
//             username: this.state.username,
//             email: this.state.email,
//             phone: this.state.phone
//         }

//         axios.post('http://localhost:4000/app/signup', registered)
//             .then(response =>console.log(response.data))

//         this.setState({
//             username:'',
//             email:'',
//             phone:''
//         })


//     }

//     render(){
//         return(
//             <div>
//                 <div className='container'>
//                     <div className='form-div' style={{color:"back"}}>
//                         <form onSubmit={this.onSubmit}>
//                             <input type='text'
//                             placeholder='User Name'
//                             onChange={this.changeUsername}
//                             value={this.state.username}
//                             className='form-control form-group'
//                             />
//                             <input type='email' 
//                             placeholder='Email'
//                             onCanPlay={this.changeEmail}
//                             value={this.state.email}
//                             className='form-control form-group'
//                             />
//                             <input type='number' 
//                             placeholder='Phone'
//                             onCanPlay={this.changePhone}
//                             value={this.state.phone}
//                             className='form-control form-group'
//                             />
//                             <input type='submit' className='btn btn-primary btn-block' value='Submit' />
//                         </form>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default Events;

// export default function Events() {

//     const [user, setUser] = useState({
//         username: "",
//         email: "",
//         phone: ""
//     });

//     let username, value; 

//     const handleInputs =(e) => {
//         console.log(e);
//         username= e.target.username;
//         value= e.target.value;

//         setUser({...user,[username]: value});

//     }
//     // const [formValues, setFormValues] = useState([]);

//     // const submitForm = () => {
//     //     setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
//     //     console.log(initialValues);
//     // };

//     const PostData = async (e) => {
//         e.preventDefault();
//         const { username, email, phone} = user;

//         const res = await fetch("/signup", {
//             method:"POST",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body:JSON.stringify({
//                 username, email, phone
//             })
//         });
//         const data = await res.json();
//         if(data.status === 422 || !data){
//             window.alert("invlid registration");
//             console.log("invalid registration");
//         }else{
//             window.alert("Registration successfull");
//             console.log("successfull registration");

//             // history.push("/signup");
//         }

//     }


//    
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useState, useEffect } from 'react';


// export default function Events() {

//     const [initialValues, setInitialValues] = useState({
//         username: "",
//         email: "",
//         phone: "",
//     });
//     const [formValues, setFormValues] = useState([]);

//     const submitForm = () => {
//         setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
//         console.log(initialValues);
//     };

//     function reset(ev){
//         ev.preventDefault();
//         setInitialValues({
//             username: "",
//             email: "",
//             phone: "",
//         });
//     }

//     useEffect(() => {
//         localStorage.setItem("formValues", JSON.stringify(formValues));
//     }, [formValues]);
//     return (
//         <div className='row' style={{display:"flex", justifyContent:"center", width:"100%"}}>
//             <p>Submit your details to get events updates</p>
//             <div className="col-md-8" style={{fontSize:"32px"}}>
//                     Username
//                     <input
//                     className='form-control'
//                         value={initialValues.username}
//                         onChange={(e) =>
//                             setInitialValues({ ...initialValues, username: e.target.value })
//                         }
//                     />
//                 </div>
//                 <div className="col-md-8" style={{fontSize:"32px"}}>
//                     Email Address
//                     <input
//                     className='form-control'
//                         value={initialValues.email}
//                         onChange={(e) =>
//                             setInitialValues({ ...initialValues, email: e.target.value })
//                         }
//                     />
//                 </div>
//                 <div className="col-md-8" style={{fontSize:"32px"}}>
//                     Contact Number
//                     <input
//                     className='form-control'
//                         value={initialValues.phone}
//                         onChange={(e) =>
//                             setInitialValues({ ...initialValues, phone: e.target.value })
//                         }
//                     />
//                 </div>
//                 <div className="col-12" style={{display:"flex", justifyContent:"center",paddingTop:"10px"}}>
//                     <button className='btn btn-clear' onClick={reset}>CLEAR </button>
//                     <button className='btn btn-active'  onClick={submitForm} >SUBMIT </button>
//                 </div>
//         </div>


//     );
// };

//////////////////////////////////////////////////////////////////////////////////////////


import React, { useState } from 'react';

const Events = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch("http://localhost:4000/patients", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    email: email,
                    phone: phone
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setUserName("");
                setEmail("");
                setPhone("");
                setMessage("User Created Successfully");
            } else {
                setMessage("Some error occured");
            }
        } catch (err) {
            console.log(err);
        }
    };


    function reset(ev) {
        ev.preventDefault();{
            setUserName("");
            setEmail("");
            setPhone("");
            setMessage("");

        }
    }
    return (
        <div className='container' style={{ float: "left", paddingLeft: "20px" }}>
            <div style={{ float: "left" }}>Submit your details to get events updates</div>
            <form onSubmit={handleSubmit}>
                <div className='row' style={{ width: "100%" }}>


                    <div className="col-md-8" style={{ fontSize: "32px" }}>
                        Username
                        <input
                            className='form-control'
                            type="text"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUserName(e.target.value)}

                        />
                    </div>
                    <div className="col-md-8" style={{ fontSize: "32px" }}>
                        Email Address
                        <input
                            className='form-control'
                            type="email"
                            value={email}
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}


                        />
                    </div>
                    <div className="col-md-8" style={{ fontSize: "32px" }}>
                        Contact Number
                        <input
                            className='form-control'
                            type="text"
                            value={phone}
                            placeholder="Phone Number"
                            onChange={(e) => setPhone(e.target.value)}

                        />
                    </div>
                    <div className="col-8" style={{ justifyContent: "center", float: "left" }}>
                        <button className='btn btn-clear' onClick={reset}>CLEAR </button>
                        <button className='btn btn-active' type="submit">SUBMIT </button>
                        <br></br>
                        <div className='message'>{message ? <p>{message}</p> : null}</div>
                    </div>


                </div>
            </form>
            {/* <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={username}
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            />
            <input 
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <input 
            type="text"
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            />
            <button type="submit">Create</button>
            <div className='message'>{message ? <p>{message}</p> : null}</div>
        </form> */}

        </div>
    )
}

export default Events
