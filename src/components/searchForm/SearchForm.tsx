import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { Input } from '../input/Input'

export function SearchForm () {
  const { query } = useParams<{ query: string }>()
  const navigate = useNavigate()
  const [value, setValue] = useState(query)

  function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!value) {
      navigate('/posts/all/1')

      return
    }

    navigate(`/posts/search/${value}/1`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
    </form>
  )
}