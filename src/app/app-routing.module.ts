import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login-page/login.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes=[

{path:"",redirectTo:"home", pathMatch:'full'},
    {path:"home",component:HomePageComponent, canActivate:[AuthGuard]},
    {path:"products/:catId", component:ProductsPageComponent, canActivate:[AuthGuard]},
    {path:"products/sub/:subId", component:ProductsPageComponent, canActivate:[AuthGuard]},
    {path:"products/details/:id", component:ProductDetailPageComponent, canActivate:[AuthGuard]},
    {path:"about",component:AboutPageComponent},
    {path:"contact",component:ContactPageComponent,canActivate:[AuthGuard]},
    {path:"register",component:RegisterPageComponent},
    {path:"login",component:LoginComponent},
    {path:"**", component:ErrorPageComponent}
]

@NgModule({

    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {
 
}