const Nav = () => {
    return(
    <nav class="navbar navbar-expand-lg darkgr ">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Christmas Joy</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link lightgr " aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link lightgr" href="/songs">Songs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link lightgr" href="/foods">Foods</a>
                </li>
                <li class="nav-item">
                <a class="nav-link lightgr" href="/decorations">Decorations</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav