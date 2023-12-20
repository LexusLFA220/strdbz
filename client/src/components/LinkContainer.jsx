import Table from './Table'
import Form from './Form'
import {useState} from 'react'

function LinkContainer(){
    const [strdbzs, setStrdbzs] = useState([])

    const handleRemove = (index) => {
        let _fghtz = [...strdbzs]
        _fghtz.splice(index,1)
        setStrdbzs(_fghtz)
        console.log(index)
        }

    const handleSubmit = (strdbz) => {
        setStrdbzs([...strdbzs,strdbz])
    }
    return(
        <div>
            <h1>Strongest Dragon Ball Z FighterZ</h1>
            <p>Add your favorite DBZ FighterZ with Fighter and Info to the List Kamehameha!</p>
            <Table linkData= {strdbzs} removeLink={handleRemove} />

            <h1>Add Your New Fighter!</h1>
            <Form  handleSubmitLink ={handleSubmit} />
            <p>New to Dragon Ball Z and don't know any characters click the link below to learn. </p>
            <a href="https://dragonball.fandom.com/wiki/Category:Characters">Dragon Ball Z Characters Website</a>
            <p>Want to watch Dragon Ball Z?</p>
            <a href="https://www.funimation.com/shows/dragon-ball-z/">Click Here!</a>
        </div>
    )

}

export default LinkContainer