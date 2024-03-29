import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layouts() {
    return (
        <div>
            <Layout className="layout">
                <Navbar />
                <Outlet />
            </Layout>
            <Footer />
        </div>
    )
}