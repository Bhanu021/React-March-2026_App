

const WithTheme  =  (WrappedComponent) =>{

    return  function ModifiedComponent(props){
        console.log(props)
        const newProps  = {...props , theme :  "Dark"}
        return <WrappedComponent  {...newProps } />
    }
}


// Here with Th

function Mycomponent({name , theme}){

    return <h2>Props of My component  :  {name} , {theme}</h2>

}




export default () =>{

    const HOCComponent  =  WithTheme(Mycomponent)


    return(

        <>

            <HOCComponent   name ='Bhanu'  />

                
        </>

    )

}