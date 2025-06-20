import { lazy } from "react";
export const Layout = lazy ( () => import('@/app/provider/layout/layout'))
export const Home = lazy ( () => import("@/pages/home/home") );
export const Edit = lazy ( () => import("@/pages/edit/edit") );
export const Delete = lazy ( () => import("@/pages/delete/delete"))
export const Post = lazy ( () => import("@/pages/post/post"))
export const Loading = lazy ( () => import("@/shared/loading/loading"))