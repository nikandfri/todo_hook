import React, {useState, useEffect} from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'; 
import Add from './Add'
import './TodoList.css'
import '@fontsource/roboto';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function TodoList(props){
    const classes = useStyles();
    
    const saveditems = JSON.parse(localStorage.getItem('todos'));
    const [todos, settodos] = useState(saveditems || []);
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      });


    const handleSubmit = (e,state) => {
        e.preventDefault()
        console.log("Logging into TodoList", state)
        settodos([...todos, {text: state, id: uuidv4()}])
        
    }

    const deleteTodo = (e) => {
        console.log(e.target.parentNode.parentElement.parentElement.parentElement.firstChild.firstChild)
        let id = e.target.parentNode.parentElement.parentElement.parentElement.firstChild.firstChild.id
        const result = todos.filter(todo => todo.id !== id)
        settodos(result)
    }

    const editTodo = (e) => {
        let id = e.currentTarget.parentElement.firstChild.id
        console.log("id is:", id)
        console.log(todos.find(element => element.id === id))
        let update = prompt("Dein update?")
        settodos([...todos], todos.find(element => element.id === id).text = update)
        
        
        
    }

    const mapping = todos.map(todo => <Todo edit={editTodo} delete={deleteTodo} id={todo.id} data={todo.text} />)
    return(
        <div>
            <CssBaseline />
            
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            ToDo App
                        </Typography>
                    </Toolbar>
                </AppBar>
            
                <ul style={{margin:'0px', padding:'0px'}}>
                    {mapping}
                </ul>
                <Add handleSubmit={handleSubmit}/>
            
        </div>
    )
}