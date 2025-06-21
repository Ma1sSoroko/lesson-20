import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/showModals/store'
import { useParams } from 'react-router'
import { Loader } from '../loader/Loader'
import { fetchPost } from '../../redux/postSlice'
import type { PostStateType } from '../../types'

type PostParams = {
  id: string
}

export function Post(): React.ReactElement {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector((state): PostStateType => state.post)
  const { id } = useParams<PostParams>()

  useEffect(() => {
    if (!id) return

    dispatch(fetchPost(id))
  }, [id, dispatch])

  if (isLoading) {
    return <Loader />
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