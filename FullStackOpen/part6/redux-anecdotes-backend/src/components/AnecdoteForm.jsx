import { createAnecdote } from "../reducers/anecdoteReducer"
import { useDispatch } from "react-redux"
import { notification } from "../reducers/notificationReducer"
import anecdoteService from '../services/anecdotes'

// const NoteForm = (props) => {
//   const dispatch = useDispatch()
  
//   const addNote = async (event) => {
//     event.preventDefault()
//     const content = event.target.note.value
//     event.target.note.value = ''
//     const newNote = await noteService.createNew(content)
//     dispatch(createNote(newNote))
//   }

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  const addAnecdote=async (event)=>{
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ""
    const newNote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newNote))
    dispatch(notification(`You created ${content}`))
    // debugger
  }
  return <div className="form"><h2>Create New</h2>
      <form onSubmit={
        addAnecdote
      }>
        <div>
          <input name='anecdote'/>
        </div>
        <button className="btn-add" type='submit'>Add</button>
      </form>
    </div>
}

export default AnecdoteForm
