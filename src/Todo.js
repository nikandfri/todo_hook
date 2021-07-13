import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { ListItem, ListItemText, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box'


export default function Todo(props){
    const [isactive, setactive] = useState(false)
    

    const handleActive = (e) => {
        if(isactive === true){
            setactive(false)
        } else {
            setactive(true)
        }
        
    }

    

    return(
        <div>
            <Box flexDirection="row" display="flex"  bgcolor="background.paper">
                
                <ListItem id={props.id}>
                    {isactive ? <span style={{textDecoration: 'line-through'}}><ListItemText onClick={handleActive}>{props.data}</ListItemText></span> :<span style={{textDecoration: 'none'}}><ListItemText onClick={handleActive}>{props.data}</ListItemText></span> }
                </ListItem>
                <Button style={{width:'30px !important' }} onClick={props.edit}><EditIcon/></Button >
                <Button style={{width:'30px'}} onClick={props.delete}><HighlightOffIcon/></Button> 
            </Box>
        <Divider />
        </div>      
    )
}