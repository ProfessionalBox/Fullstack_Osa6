import { getId } from '../store'

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: content,
      id: getId(),
      votes: 0
    }
  }
}

export const newVote = (id) => {
  return {
    type: 'NEW_VOTE',
    data: { id }
  }
}


export default createAnecdote