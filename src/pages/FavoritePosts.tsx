import { useEffect } from 'react'
import { NavLink, useOutletContext } from 'react-router'
import { PostBig } from '../components/postBig/PostBig'
import { locales } from '../config/locales'
import type { TitleContextType } from '../types'
import { PostPreviewModal } from '../components/postPreviewModal/PostPreviewModal'
import { PostPreviewImage } from '../redux/showModals/PostPreviewImage'
import { useAppSelector, useAppDispatch } from '../redux/showModals/store'
import { fetchPosts } from '../redux/postsSlice'


export function FavoritePosts(): React.ReactElement {
    const dispatch = useAppDispatch()
    const lang = useAppSelector(state => state.lang.lang)
    const favoritePosts = useAppSelector(state => state.posts.favoritePosts)
    const { setTitle } = useOutletContext<TitleContextType>()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    useEffect(() => { setTitle(locales[lang].allPosts.title) }, [lang])

    if (favoritePosts.length == 0) {
        return <div>Favorite posts are empty</div>
    }

    // const favoritePosts = list.filter(post => post.isFavorite)

    function buildClassName({ isActive }: { isActive: boolean }): string {
        return isActive ? 'nav-link active' : 'nav-link'
      }

    return (
        <div>
            <div className="navbar navbar-expand-lg">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className={buildClassName} to="/posts/all">All</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={buildClassName} to="/posts/favorite">My favorites</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                {favoritePosts.map(post => {
                    if (!post.title || !post.text || !post.date) return null;
                    const postData = {
                        title: post.title,
                        text: post.text,
                        image: post.image,
                        date: post.date,
                        id: post.id
                    };
                    return <PostBig key={post.id} {...postData} />;
                })}
                <PostPreviewModal />
                <PostPreviewImage />
            </div>
        </div>
    )
}