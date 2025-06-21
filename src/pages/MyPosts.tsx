import { useEffect } from 'react'
import { useParams, NavLink, useOutletContext } from 'react-router'
import { PostBig } from '../components/postBig/PostBig'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { PostPreviewModal } from '../components/postPreviewModal/PostPreviewModal'
import { PostPreviewImage } from '../redux/showModals/PostPreviewImage'
import { useAppSelector, useAppDispatch } from '../redux/showModals/store'
import { fetchMyPosts, POSTS_LIMIT } from '../redux/postsSlice'
import { buildSchemePagination } from '../utils/buildPagination'

export function MyPosts(): React.ReactElement {
    const { currentPage = 1 } = useParams()
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.lang.lang)
    const { myPosts, isLoading, error, total } = useAppSelector(state => state.posts)
    const { setTitle } = useOutletContext<TitleContextType>()

    useEffect(() => {
        const offset = (Number(currentPage) - 1) * POSTS_LIMIT
        dispatch(fetchMyPosts({ offset }))
    }, [dispatch, currentPage])

    useEffect(() => { setTitle(locales[lang].header.myPosts) }, [lang])

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    if (!myPosts || myPosts.length == 0) {
        return <div>List is empty</div>
    }

    function renderPagination(): React.ReactElement {
        const pageCount = Math.ceil(total / POSTS_LIMIT)
        const pagination = buildSchemePagination(+currentPage, pageCount)

        return (
            <nav className="my-4">
                <ul className="pagination">
                    {pagination.map((item: number | string, index: number) => {
                        if (item === '...') {
                            return <li className="page-item disabled" key={index}><span className="page-link">{item}</span></li>
                        }

                        return <li className="page-item" key={index}><NavLink className="page-link" to={`/posts/my_posts/${item}`}>{item}</NavLink></li>
                    })}
                </ul>
            </nav>
        )
    }

    return (
        <div>
            {renderPagination()}
            {myPosts.map(post => (
                <PostBig key={post.id} {...post} />
            ))}
            <PostPreviewModal />
            <PostPreviewImage />
            {renderPagination()}
        </div>
    )
}