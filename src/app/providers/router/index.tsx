import { createBrowserRouter, Navigate } from "react-router-dom";

import { RoutePaths } from "./paths.ts";

import { Layout } from "@/app/layout/Layout.tsx";

import { MainPage } from "@/pages/main/MainPage.tsx";
import { LoginPage } from "@/pages/login/LoginPage.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: RoutePaths.MAIN,
        element: <MainPage/>
      },
      {
        path: RoutePaths.LOGIN,
        element: <LoginPage/>
      },
      {
        path: RoutePaths.NOT_FOUND,
        element: <Navigate to="/" />
      }
    ]
  }
])