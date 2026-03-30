import { useEffect, useRef, useState } from "react"
import '../CSS/Form.css'
import { HandleCheckBoxArray } from "../Utils/FormUtilities"
const MultiUploadLogo  =  require('../Assets/Multiple-download-Logo.png')





const FormsComponent = () => {

    const emailRef  = useRef()

    const renderCount  =  useRef(0)
    const fileInputRef  =  useRef(null)
 



    const [formValues, setFormValues] = useState({

        name: "",
        email: "",
        mobile: "",
        course: "",
        gender : "Male",
        lang : [],
        fileData  : [],
        tempFileData : []

    })

    useEffect(()=>{
        // document.getElementById('email-box').focus()
        emailRef.current.focus()
       
        
    })



    


    const handleFormValues = (e) => {
        if(e.target.name == 'lang'){
            let processed  =  HandleCheckBoxArray(e.target.value , e.target.checked , formValues.lang)
              setFormValues({...formValues , [e.target.name] : [...processed]})
        }
        else{
            setFormValues({ ...formValues, [e.target.name]: e.target.value })
        }
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

    const hanldeSubmit = (e) => {
        e.preventDefault()
        console.table(formValues)
    }



    const fileHandler = (e) =>{    
        console.log(e.target.files)
        let fileData  =  []
        let tempFileData  = []
        for(const f of e.target.files)
        {
            fileData.push(f);
            tempFileData.push(URL.createObjectURL(f))
        }
        console.table(fileData)
        console.table(tempFileData)
        setFormValues({...formValues ,  ['fileData'] :[...fileData], ['tempFileData'] : [...tempFileData]})
    }




    return (

        <>
            <h1>Page Refresh count :  {renderCount.current}</h1>
            <form>

            <div className="main">
                <input className="inpt-fm" name="name" placeholder="Enter Your Name" value={formValues.name} onChange={handleFormValues} />
                <input id="email-box"  ref={emailRef} className="inpt-fm" name="email" placeholder="Enter Your Email" value={formValues.email} onChange={handleFormValues} />
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
                <form>
                    <label className="lbl-fm">Select Gender</label>
                    <label htmlFor='male' >Male</label>
                    <input onChange={handleFormValues} type="radio" id="gender" name="gender" placeholder="Male" value='Male' checked={formValues.gender == "Male"} />
                    <label htmlFor='female'>Female</label>
                    <input onChange={handleFormValues} type="radio" id="gender" name="gender" placeholder="Female" value='Female' checked={formValues.gender == "Female"} />
                </form>
                <form>
                    <label className="lbl-fm">Select Languages</label>
                    <label htmlFor='hindi' >Hindi</label>
                    <input onChange={handleFormValues} type="checkbox" id="lang" name="lang" placeholder="hindi" value='hindi'  />
                    <label htmlFor='english'>English</label>
                    <input onChange={handleFormValues} type="checkbox" id="lang" name="lang" placeholder="english" value='english'  />
                    <label htmlFor='urdu'>Urdu</label>
                    <input onChange={handleFormValues} type="checkbox" id="lang" name="lang" placeholder="urdu" value='urdu'  />
                    <label htmlFor='french'>French</label>
                    <input onChange={handleFormValues} type="checkbox" id="lang" name="lang" placeholder="french" value='french'  />
                    <label htmlFor='british'>British</label>
                    <input onChange={handleFormValues} type="checkbox" id="lang" name="lang" placeholder="british" value='british'  />
                </form>
                <form>
                    <input ref={fileInputRef}  htmlFor='fileInput' multiple accept="image/png image/jpeg"  onChange={fileHandler} type="file"  style={{display : "none"}}   />
                    <label>Upload Your Images</label>
                    <img  onClick={()=>{fileInputRef.current.click()}}   src={MultiUploadLogo} width="100px" height="100px" />
                </form>
                {Array.isArray(formValues.tempFileData ) && formValues.tempFileData.length > 0 ?
                <form>
                    {formValues.tempFileData.map((el , i)=>(
                        <img key={`show-img-${i}`} className="show-img" width="100px" height='100px'  src={el} />
                    ))}
                </form> : <></>}
                    <button className="btn-fm"  onClick={hanldeSubmit}>Submit</button>
                {/* <input className="btn-fm" type="submit" placeholder="Submit" value='Submit' /> */}
            </div>
            </form>




        </>

    )

}


export default FormsComponent;