function Nav() {
  return (
    <nav role="navigation" aria-label="Main Navigation">
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', padding: 0 }}>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Men's</a></li>
        <li><a href="#">On the Street</a></li>
        <li><a href="#">The Catwalk</a></li>
        <li><a href="#">AdWatch</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
}

export default Nav;