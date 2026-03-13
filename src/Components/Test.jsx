import React  , {useState} from 'react'


const dummyData  =  [
  {
    "name": "Aarav Sharma",
    "email": "aarav.sharma92@gmail.com",
    "mobile": "9876543210",
    "rollNumber": "STU1001",
    "address": "24 Green Park, New Delhi, India"
  },
  {
    "name": "Riya Verma",
    "email": "riya.verma18@yahoo.com",
    "mobile": "9812345678",
    "rollNumber": "STU1002",
    "address": "14 Civil Lines, Jaipur, Rajasthan, India"
  },
  {
    "name": "Kabir Mehta",
    "email": "kabir.mehta07@gmail.com",
    "mobile": "9890012345",
    "rollNumber": "STU1003",
    "address": "52 MG Road, Pune, Maharashtra, India"
  },
  {
    "name": "Ananya Singh",
    "email": "ananya.singh21@outlook.com",
    "mobile": "9823456789",
    "rollNumber": "STU1004",
    "address": "33 Gomti Nagar, Lucknow, Uttar Pradesh, India"
  },
  {
    "name": "Rohan Gupta",
    "email": "rohan.gupta55@gmail.com",
    "mobile": "9871203456",
    "rollNumber": "STU1005",
    "address": "19 Sector 15, Noida, Uttar Pradesh, India"
  },
  {
    "name": "Sneha Iyer",
    "email": "sneha.iyer09@gmail.com",
    "mobile": "9845012345",
    "rollNumber": "STU1006",
    "address": "88 Anna Nagar, Chennai, Tamil Nadu, India"
  },
  {
    "name": "Arjun Patel",
    "email": "arjun.patel77@gmail.com",
    "mobile": "9898765432",
    "rollNumber": "STU1007",
    "address": "45 Satellite Road, Ahmedabad, Gujarat, India"
  },
  {
    "name": "Neha Kapoor",
    "email": "neha.kapoor31@gmail.com",
    "mobile": "9819988776",
    "rollNumber": "STU1008",
    "address": "12 Rajouri Garden, New Delhi, India"
  },
  {
    "name": "Aditya Nair",
    "email": "aditya.nair66@gmail.com",
    "mobile": "9887766554",
    "rollNumber": "STU1009",
    "address": "61 Marine Drive, Kochi, Kerala, India"
  },
  {
    "name": "Pooja Choudhary",
    "email": "pooja.choudhary11@gmail.com",
    "mobile": "9867543210",
    "rollNumber": "STU1010",
    "address": "73 Bapu Nagar, Bhopal, Madhya Pradesh, India"
  }
]


function Test(){

    const [data  , setData] = React.useState([10,9,200,432,897,666 , 4201 , 789 , 650])




    const [stData , setStData] =  React.useState([])

    const [count , setCount] =  useState(0);




    return(

        <>
        <button onClick={()=> setStData(dummyData) }>Click ME</button>

        {/* <h1>Current Count Value   :{count}</h1>
        <h1>{count < 10 ? "Less then 10"  :     (count  >= 10 && count <=  15) ? "between 10 -  15" : "Greater Then 15"}
        </h1> */}

         {/* {data.map((el,i)=>(
    
                <h1>{el % 2 == 0  ? el * 2 : el * 5}</h1>

        
         
         )
         
         )}        */}



         { Array.isArray(stData)  && stData.length > 0  &&   stData.map((el , i)=>(

                <div  key={`student-${i}`} style={{border : "none" , marginBottom : "10px" , padding  : "10px", boxShadow : "15px 15px 8px green"}}>
                    <h3>Name : {el.name}</h3>
                    <h3>Email : {el.email}</h3>
                    <h3>Roll Number : {el.rollNumber}</h3>
                </div>
          
         ))}

        </>
    )
}

export default Test