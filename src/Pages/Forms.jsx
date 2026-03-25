import { useState } from "react"
import '../CSS/Form.css'




const FormsComponent = () => {


    const [formValues, setFormValues] = useState({

        name: "",
        email: "",
        mobile: "",
        course: "",
        gender : ""

    })


    const handleFormValues = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }


    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [mobile, setMobile] = useState('')




    // const handleInput = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    //     setName(e.target.value)


    // }
    // const handleInputEmail = (e) => {
    //     console.log(e.target.name)
    //     console.log(e.target.value)

    //     setEmail(e.target.value)

    // }
    // const handleInputMobile = (e) => {

    //     setMobile(e.target.value)

    // }

    const hanldeSubmit = () => {

        console.table(formValues)

    }





    return (

        <>

            <div className="main">
                <input className="inpt-fm" name="name" placeholder="Enter Your Name" value={formValues.name} onChange={handleFormValues} />
                <input className="inpt-fm" name="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleFormValues} />
                <input className="inpt-fm" name="mobile" placeholder="Enter Your Mobile" value={formValues.mobile} onChange={handleFormValues} />
                <select defaultValue={formValues.course} name="course" onChange={handleFormValues} className="select-fm">
                    <option className="opt-fm">Select course</option>
                    <option value='c++'>C++</option>
                    <option value='java'>Java</option>
                    <option value='python'>Python</option>
                    <option value='js'>Javascript</option>
                    <option value='mongo'>Mongo</option>
                    <option value='nodejs'>Node Js</option>
                </select>
                    <label>Select Gender</label>
                <form>
                    <label htmlFor='male' >Male</label>
                    <input onChange={handleFormValues} type="radio" id="gender" name="gender" placeholder="Male" value='Male' />
                    <label htmlFor='female'>Female</label>
                    <input onChange={handleFormValues} type="radio" id="gender" name="gender" placeholder="Female" value='Female' />
                </form>
                    <button className="btn-fm" onClick={hanldeSubmit}>Submit</button>
            </div>




        </>

    )

}


export default FormsComponent;