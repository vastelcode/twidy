import { createBrowserRouter, Navigate } from "react-router-dom";

import { RoutePaths } from "./paths.ts";

import { Layout } from "@/app/layout/Layout.tsx";

import { MainPage } from "@/pages/main/MainPage.tsx";
import { LoginPage } from "@/pages/login/LoginPage.tsx";
import { MessagesPage } from "@/pages/messages/index.ts";
import { SearchPage } from "@/pages/search/index.ts";
import { SettingsPage } from "@/pages/settings/index.ts";

export const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: RoutePaths.MAIN.path,
        element: <MainPage/>
      },
      {
        path: RoutePaths.LOGIN.path,
        element: <LoginPage/>
      },
      {
        path: RoutePaths.MESSAGES.path,
        element: <MessagesPage/>
      },
      {
        path: RoutePaths.SEARCH.path,
        element: <SearchPage/>
      },
      {
        path: RoutePaths.SETTINGS.path,
        element: <SettingsPage/>
      },
      {
        path: RoutePaths.NOT_FOUND,
        element: <Navigate to="/" />
      }
    ]
  }
])