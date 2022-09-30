import React, { useState, useEffect } from 'react';


export default function Events() {

    const [initialValues, setInitialValues] = useState({
        username: "",
        email: "",
        phone: "",
    });
    const [formValues, setFormValues] = useState([]);

    const submitForm = () => {
        setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    };

    function reset(ev){
        ev.preventDefault();
        setInitialValues({
            username: "",
            email: "",
            phone: "",
        });
    }

    useEffect(() => {
        localStorage.setItem("formValues", JSON.stringify(formValues));
    }, [formValues]);
    return (
        <div className='row' style={{display:"flex", justifyContent:"center", width:"100%"}}>
            <p>Submit your details to get events updates</p>
            <div className="col-md-8" style={{fontSize:"32px"}}>
                    Username
                    <input
                    className='form-control'
                        value={initialValues.username}
                        onChange={(e) =>
                            setInitialValues({ ...initialValues, username: e.target.value })
                        }
                    />
                </div>
                <div className="col-md-8" style={{fontSize:"32px"}}>
                    Email Address
                    <input
                    className='form-control'
                        value={initialValues.email}
                        onChange={(e) =>
                            setInitialValues({ ...initialValues, email: e.target.value })
                        }
                    />
                </div>
                <div className="col-md-8" style={{fontSize:"32px"}}>
                    Contact Number
                    <input
                    className='form-control'
                        value={initialValues.phone}
                        onChange={(e) =>
                            setInitialValues({ ...initialValues, phone: e.target.value })
                        }
                    />
                </div>
                <div className="col-12" style={{display:"flex", justifyContent:"center",paddingTop:"10px"}}>
                    <button className='btn btn-clear' onClick={reset}>CLEAR </button>
                    <button className='btn btn-active'  onClick={submitForm} >SUBMIT </button>
                </div>
        </div>
                

    );
};
