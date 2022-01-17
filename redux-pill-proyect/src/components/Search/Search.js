const Search = () => {
    return (
        <>
            <nav class=" mt-3 navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Search property</a>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
export default Search

