import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: "flex", minHeight: "100vh" }}>
            <aside
                style={{
                    width: "220px",
                    background: "#f4f4f4",
                    padding: "20px",
                    borderRight: "1px solid #ddd",
                }}
            >
                <h2>Tailor Dashboard</h2>
                <nav>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        <li>
                            <a href="/orders">Order Management</a>
                        </li>
                        <li>
                            <a href="/customers">Customer List</a>
                        </li>
                        <li>
                            <a href="/graph">Statistics</a>
                        </li>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main style={{ flex: 1, padding: "30px" }}>{children}</main>
        </div>
    );
}</aside>