import { giveVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from "react-redux"
import { notification } from "../reducers/notificationReducer"
const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => {
  return anecdote.content.includes(state.filter);
}))
  const dispatch = useDispatch()
  const vote = (id,content) => {
      console.log('vote', id)
      dispatch(giveVote({id}))
      dispatch(notification(`You voted ${content}`))
    }
  return <div className='article'>{[...anecdotes]
    .sort((a, b) => b.votes - a.votes)
    .map(anecdote => (
        <div className='card' key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div className='only-display-onhover'>
            <div>{anecdote.votes}</div>
            <div className='display-block'>
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
            </div>
          </div>
        </div>
      ))}
    </div>
}

export default AnecdoteList
