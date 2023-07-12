import { Routes } from "@angular/router";
import { parseRouteSpec, routeSpec } from "./rtl.utils";
import { HomePageComponent } from "src/app/comps/home-page/home-page.component";

export const NavBarRoutes: routeSpec[] = [
    {
        label:`Home`,
        route: ``,
        component:HomePageComponent
    },

]

export function getAllRoutes():Routes{
    const routes:Routes = NavBarRoutes.map((routespec,index,[])=>{
        return parseRouteSpec(routespec);
    }).filter((route,index,[])=>Object.keys(route).length!==0);    
    // routes.push(...HomePageRoutes.map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...objectToVals(miscRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(otherRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    // routes.push(...(personRoutes).map((routespec,index,[])=>parseRouteSpec(routespec)))
    return routes;
}

