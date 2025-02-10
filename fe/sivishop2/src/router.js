import { ROUTES } from "./utils/router";
import HomePage from "./pages/user/homePage";
import ProfilePage from "./pages/user/profilePage";
import MaterLayout from "./pages/user/theme/materLayout";
import { Route, Routes } from "react-router-dom";
const RenderRouterPage = () =>{
    const RouterPage = [
        {
            path: ROUTES.USER.HOME,
            component: <HomePage />
        },
        {
            path: ROUTES.USER.PROFILE,
            component: <ProfilePage />
        }
    ]
    return (
        <MaterLayout>
            <Routes>
                {RouterPage.map((item, index) =>(<Route key={index} path={item.path} element={item.component} />))}    
            </Routes>
            
        </MaterLayout>
        
    )
}

export const RenderCustom = () =>{
    return RenderRouterPage();
}