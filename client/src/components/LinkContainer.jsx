import Table from './Table'
import Form from './Form'
import {useState} from 'react'

function LinkContainer(){
    const [strdbzs, setStrdbzs] = useState([])

    const handleRemove = (index) => {

    }

    const handleSubmit = (strdbz) => {
        setStrdbzs([...strdbzs,strdbz])
    }
    return(
        <div>
            <h1>Strongest Dragon Ball Z FighterZ</h1>
            <p>Add your favorite DBZ FighterZ with Fighter and Info to the List Kamehameha!</p>
            <Table linkData= {strdbzs} />

            <h1>Add Your New Fighter!</h1>
            <Form  handleSubmitLink ={handleSubmit} />
        </div>
    )

}

export default LinkContainer