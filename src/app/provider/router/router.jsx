import { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Edit, Delete, Home, Layout, Loading } from '@/app/provider/lazy/lazy'
import { Post } from '../lazy/lazy'

export default function Router() {

    return <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Suspense fallback={<Loading />}>
                    <Layout />
                </Suspense>} >

                    <Route index element={<Home />} />
                    <Route path='delete' element={<Delete />} />
                    <Route path='edit' element={<Edit />} />
                    <Route path='post' element={<Post/>} />
                </Route>

                


            </Routes>
        </BrowserRouter>

    </>
}