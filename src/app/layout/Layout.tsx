import { Sidebar } from "@/widgets/sidebar/index.ts";
import { Header } from "@/widgets/header/index.ts";


import { Outlet } from "react-router-dom";

import styles from './Layout.module.scss';


export const Layout = () => {

  return (
    <>
    <Sidebar/>
    <Header/>
    <main className={styles.main} >
    <Outlet/>
    </main>
    </>
  );
}