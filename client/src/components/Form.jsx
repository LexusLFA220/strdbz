function Form(){
    return(
        <form>
            <label for="linkName">Fighter Name:</label>
            <input type="text" id="linkName" name="linkName" value="" />
            <br />
            <br />
            <label for="URL">Information URL:</label>
            <input type="text" id="linkURL" name="linkURL" value="" />
            <br />
            <br />
            <input type="submit" value="Submit"></input>
        </form>
    )
}
export default Form