import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import type { Post } from '../../types'

type PostParams = {
  id: string
}

export function ListOfPosts(): React.ReactElement {
  const { id } = useParams<PostParams>()
  const [data, setData] = useState<Post | null>(null)

  useEffect(() => {
    if (!id) return

    fetchData(id)
  }, [id])

  async function fetchData(id: string): Promise<void> {
    const response = await fetch(`https://studapi.teachmeskills.by/blog/posts/${id}/`)

    if (response.ok) {
      const data: Post = await response.json()

      setData(data)
    }
  }

  if (!data) {
    return <div>Пост не найден</div>
  }

  return (
    <article>
      <time className="text-body-secondary">{data.date}</time>
      <div className="d-flex justify-content-center">
        <img src={data.image} alt="" className="img-fluid rounded" />
      </div>
      <h1 className="mt-3">{data.title}</h1>
      <p>{data.text}</p>
    </article>
  )
}