import React, {useState} from 'react'

interface Props {
  handleSubmit: (title: string, value: number) => void
}

const EntryForm = ({ handleSubmit }: Props) => {

  const initial = {
    title: "",
    value: 0 
  }

  const [state, setState] = useState(initial);

  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(state.title, state.value)}
      }>
      <label>
        Title:
        <input name="title" value={state.title} onChange={(e) => setState({...state, title: e.target.value})}/>
      </label>
      <label>
        Value:
        <input name="value" value={state.value} onChange={(e) => setState({...state, value: parseInt(e.target.value)})}/>
      </label>
      <button >OK</button>

    </form>
  )
}


export default EntryForm