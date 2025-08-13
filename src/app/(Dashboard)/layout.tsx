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
            ></aside>