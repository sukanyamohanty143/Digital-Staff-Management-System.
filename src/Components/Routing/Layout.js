


function Layout(){
    return(
        <>
        <nav>
        <ul>
          <li>
            <Link to="/staff">Home</Link>
          </li>
          <li>
            <Link to="/admin">Blogs</Link>
          </li>
          <li>
            <Link to="/searchbar">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        </>
    )
}
export default Layout;