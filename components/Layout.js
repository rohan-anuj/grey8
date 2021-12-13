import Nav from "./Nav"

function Layout({ children }) {
    return (
        <> 
        <Nav/>


        <div className="flex-col ">
            {children}
        </div>
        </>

    )
}

export default Layout
