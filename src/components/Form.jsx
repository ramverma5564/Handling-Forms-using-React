import React from "react"

export default function Form(){

    const [FormData, setFormData] = React.useState(
        {
            firstName : "",
            lastName : "",
            email : "",
        }
    )

    function HandleChange(event){
        setFormData(
            prevFormData => {
                return {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
            }
        )
    }
    return(
        <form action="">
            <input 
                type="text" 
                placeholder="First Name"
                onChange={HandleChange}
                name="firstName"
                value={FormData.firstName}
            />

            <input 
                type="text" 
                placeholder="Last Name"
                onChange={HandleChange}
                name="lastName"
                value={FormData.lastName}
            />

            <input 
                type="text" 
                placeholder="E-mail"
                onChange={HandleChange}
                name="email"
                value={FormData.email}
            />
        </form>

        
    )
}