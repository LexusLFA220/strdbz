function Form(){
    return(
        <form onSubmit={(event)=>{
            event.preventDefault()
        }}>
            <label for="linkName">Fighter Name:</label>
            <input type="text" id="linkName" name="linkName" />
            <br />
            <br />
            <label for="URL">Information URL:</label>
            <input type="text" id="linkURL" name="linkURL"  />
            <br />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}
export default Form