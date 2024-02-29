import { Route,createBrowserRouter,createRoutesFromElements } from "react-router-dom";
import { HOME, MAIN_LAYOUT } from "../constants/page-paths";
import Layout from "./layout/main-layout";
import Home from "../pages/home/home";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
         <Route path={MAIN_LAYOUT} element={<Layout />}>
            <Route path={HOME} element={<Home />} />
         </Route>
        </>
    )
)

export default router