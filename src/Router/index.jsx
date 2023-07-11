import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { AuthLayout, ClientLayout, MainLayout } from '../layouts'
import App from '../App'
import { Login } from '../views/Auth'
import { Dashboard, HomePage, Jobs, Orders, Quatations, Settings } from '../views/System'

const router = createBrowserRouter (createRoutesFromElements (
    <Route path='/' element={<MainLayout />}>
        <Route index element={<App />} />
        <Route path='auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />} />
        </Route>
        <Route path='app' element={<ClientLayout />} >
            <Route index element={<HomePage />} />
            <Route path='orders' element={<Orders />} />
            <Route path='settings' element={<Settings />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='jobs' element={<Jobs />} />
            <Route path='quatations' element={<Quatations />} />
        </Route>
    </Route>
))


export default router