import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Box from '@material-ui/core/Box';

export default function Add(props){
    const [state, setstate] = useState("")

    const handleChange = (e) => {
        e.preventDefault()
        setstate(e.target.value)
    }


    return(
        <form style={{marginTop: '50px'}}onChange={handleChange}>
            <Box component="span" marginTop={50}>
                <Input type="text" value={state}></Input>
                <Button style={{marginLeft: '15px'}} size="small" variant="contained" color="primary" onClick={(e) => {
                    props.handleSubmit(e,state)
                    setstate("")
                }}>Add</Button>
            </Box>
        </form>
    )
}