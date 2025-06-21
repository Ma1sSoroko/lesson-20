import style from './PostBig.module.scss'
import { Link } from 'react-router'
import { useAppDispatch } from '../../redux/showModals/store'
import { setData, showModal } from '../../redux/showModals/postPreviewSlice'
import { addFavoritePost } from '../../redux/postsSlice'

export function PostBig(props: { title?: string, text?: string, image: string, date?: string, id: number }): React.ReactElement {
    const { title, text, image, date, id } = props
    const dispatch = useAppDispatch()

        function handleClickPostPreview() {
            const data = {
                title,
                text,
                image,
                date,
                id
            }
            dispatch(setData(data))
            dispatch(showModal())
        }

        function handleClickPreviewImage() {
            const data = {
                image,
                id
            }
            dispatch(setData(data))
            dispatch(showModal())
        }

        function handleClickAddToFavorite() {
            dispatch(addFavoritePost(props))
            console.log(addFavoritePost)
        }

    return (
        <>
            <div className={style.wrap}>
                <div>
                    <h2>{title}</h2 >
                    <p>{text}</p>
                    <p className="card-text"><small className="text-body-secondary">{date}</small></p>
                    <button className="btn btn-primary mb-2" onClick={handleClickAddToFavorite}>Добавить в избранное</button>
                    <div className="d-flex gap-2">
                        <Link to={`/posts/${id}`} className="btn btn-primary">Читать далее</Link>
                        <button className="btn btn-primary" onClick={handleClickPostPreview}>Быстрый просмотр</button>
                    </div>
                </div>
                <div className='col-4 rounded overflow-hidden'>
                    <img src={image} className={style.img} onClick={handleClickPreviewImage} />
                </div>
            </div>
        </>
    )
}