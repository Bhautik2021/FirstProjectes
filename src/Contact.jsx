import React, { useState } from 'react'

function Contact() {

    const [data,setData] = useState({
        name:'',
        mobile:'',
        email:'',
        msg:''
    });

    const InputEvent = (e) => {
        const { name , value } = e.target;

        setData((preVal)=>{
            return {
                ...preVal,
                [name]:value, // aam karva mate name attribute and state name same hova joi ye 
            };
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`my name is ${data.name} my mobile Number is ${data.mobile} my email id is ${data.email} i want to say ${data.msg}`);
        
    }

    return (
        <>
            <div className="my-5" >
                <h1 className="text-center"> Contact US </h1>
            </div>
            <div className="contanier contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">

                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Full Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="full name" required name="name" value={data.name} onChange={InputEvent} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Mobile number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="mobile number" required name="mobile" value={data.mobile} onChange={InputEvent}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required name="email" value={data.email} onChange={InputEvent}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">meassages</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} required></textarea>
                            </div>

                            <button type="submit" className="btn btn-outline-primary my-3">Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
