function Navbar({ cartCount, toggleCart }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h1 className="navbar-brand">Mi Tienda</h1>
      <button className="btn btn-outline-light position-relative" onClick={toggleCart}>
        🛒
        {cartCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartCount}
          </span>
        )}
      </button>
    </nav>
  )
}

export default Navbar
