export default function layout({Children}: readonly<{ Children: React.ReactNode }>) {  
    return (
        <div>
            <main className="w-full h-screen font-sans">
                {Children}
            </main>
        </div>
    )  
}   