import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router'
import { fetchActivation } from '../redux/auth/authSlice'
import { useAppDispatch, useAppSelector } from '../redux/showModals/store'

export function Activation(): React.ReactElement {
  const navigate = useNavigate()
  const { uid, token } = useParams()
  const dispatch = useAppDispatch()
  const { isActivated } = useAppSelector((state) => state.auth)

  useEffect(() => {
    if (uid && token) {
      dispatch(fetchActivation({ uid, token }))
    }
  }, [uid, token, dispatch])

  useEffect(() => {
    if (isActivated) {
      navigate('/auth/activation/success')
    }
  }, [isActivated, navigate])

  return (
    <p>Process activation...</p>
  )
}