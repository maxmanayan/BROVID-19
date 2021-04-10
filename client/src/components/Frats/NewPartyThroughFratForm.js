import axios from "axios"
import { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import { useHistory } from "react-router-dom"



const NewPartyThroughFratForm = () =>{
    const [party, setParty] = useState('')
    const history = useHistory()

    const handleSubmit = async(e) => {
        
        try {
            let res = axios.post('/api/events', {name: party})
            history.push('/events')

            
        } catch (error) {
            alert(error)
            
        }
    }
    return(
        <div>
            <h1>New Party?</h1>
            <Form >
                <p>Doctor Name</p>
                <InputGroup 
                value={party}
                onChange={(e)=> setParty(e.target.value)}/>
                <Button type='submit' onClick={handleSubmit}>Party Button</Button>
            </Form>
        </div>
    )
}

export default NewPartyThroughFratForm 