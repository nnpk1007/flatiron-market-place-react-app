import React from "react";
import { Route, Navigate } from "react-router";
function Home() {
    return (
        <Route path="/" element={<Navigate to="/listing" />} />
    )
}

export default Home