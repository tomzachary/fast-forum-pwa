import reactLogo from '../../assets/react.svg'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on navigation
  const handleNavClick = () => setMenuOpen(false)

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={reactLogo} alt="React logo" />
      </Link>
      <button
        className={menuOpen ? `${styles.hamburger} ${styles.open}` : styles.hamburger}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={menuOpen ? styles.navOpen : styles.nav}>
        {routes.map(({ path }) => (
          <Link
            key={path}
            to={path}
            style={{ marginRight: 15 }}
            onClick={handleNavClick}
          >
            {path === '/' ? 'Home' : path.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Header
