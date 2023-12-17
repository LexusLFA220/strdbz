import {useState} from 'react'

function Form(){
    const [name,setName] = useState("")
    const [URL,setURL] = useState("")

    const handleNameChange = (event) => {
        console.log(event.target.value)
        setName(event.target.value)
    }

    const handleURLChange = (event) => {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log(name,URL)
        }}>
            <label for="linkName">Fighter Name:</label>
            <input type="text" id="linkName" name="linkName" onChange={handleNameChange} />
            <br />
            <br />
            <label for="URL">Information URL:</label>
            <input type="text" id="linkURL" name="linkURL" onChange={handleURLChange}  />
            <br />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}
export default Form