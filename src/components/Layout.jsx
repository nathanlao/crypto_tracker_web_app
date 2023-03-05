import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { Layout } from "antd";

export default function Layouts() {
    return (
        <Layout>
            <Navbar />
            <Outlet />
        </Layout>
    )
}