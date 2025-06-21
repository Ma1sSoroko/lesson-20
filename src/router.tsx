import { createBrowserRouter, Navigate } from 'react-router'
import { Layout } from './components/layout/Layout'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Registration } from './pages/Registration'
import { Search } from './pages/Search'
import { SelectedPost } from './pages/SelectedPost'
import { Success } from './pages/Success'
import { ListOfPosts } from './components/listOfPosts/ListOfPosts'
import { AllPosts } from './pages/AllPosts'
import { FavoritePosts } from './pages/FavoritePosts'
import type { RouteObject } from 'react-router'
import { Activation } from './pages/Activation'
import { NewPost } from './pages/NewPost'
import { MyPosts } from './pages/MyPosts'
const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/posts/all/1" />,
            },
            {
                path: '/posts',
                children: [
                    {
                        path: '/posts/all/:currentPage',
                        element: <AllPosts />,
                    },
                    {
                        path: '/posts/favorite',
                        element: <FavoritePosts />,
                    },
                    {
                        path: '/posts/search/:query/:currentPage',
                        element: <Search />,
                    },
                    {
                        path: '/posts/:id',
                        element: <ListOfPosts />,
                    },
                    {
                        path: '/posts/new',
                        element: <NewPost />,
                    }
                ],
            },
            {
                path: '/auth/sign-up',
                element: <SignUp />,
            },
            {
                path: '/auth/sign-up/registration',
                element: <Registration />,
            },
            {
                path: '/auth/sign-in',
                element: <SignIn />,
            },
            {
                path: '/search',
                element: <Search />,
            },
            {
                path: '/selected-post',
                element: <SelectedPost />,
            },
            {
                path: '/auth/activation/:uid/:token',
                element: <Activation />,
            },
            {
                path: '/auth/activation/success',
                element: <Success />,
            },
            {
                path: '/posts/my_posts',
                element: <MyPosts />,
            },
        ],
    },
]

export const router = createBrowserRouter(routes)