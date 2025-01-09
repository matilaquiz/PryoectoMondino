import React from 'react'
import { Outlet } from "react-router-dom"
import ProductosProvider from "../Context/ProductosProvider"

const Layout = () => {
    return <ProductosProvider>
        <Outlet />
    </ProductosProvider>
}

export default Layout;