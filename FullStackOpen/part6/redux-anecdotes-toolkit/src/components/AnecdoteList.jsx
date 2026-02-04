import { giveVote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from "react-redux"
const AnecdoteList = () => {
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => {
  return anecdote.content.includes(state.filter);
}))
  const dispatch = useDispatch()
  const vote = id => {
      console.log('vote', id)
      dispatch(giveVote(id))
    }
  return <div>{[...anecdotes]
    .sort((a, b) => b.votes - a.votes)
    .map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has <div>{anecdote.votes}&emsp;
            <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        </div>
      ))}
    </div>
}

export default AnecdoteList
