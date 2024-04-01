'use client';

import { Footer, Nav } from "@/components";
import { useState } from "react";

export default function DashboardLayout({ children }) {
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <Nav isDrawerOpen={isDrawerOpen} setDrawerOpen={setDrawerOpen} />
            {children}
            <Footer />
        </>
    );
}
