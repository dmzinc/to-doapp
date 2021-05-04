const Header = () => {
    return (
        <header> 
            <div id="page-banner">
          <h1 className="title">To-do list</h1>

          <form id="search-list">
            <input id="filter" type="text" placeholder="Search list..." />
          </form>
        </div>
        </header>
    )
}

export default Header