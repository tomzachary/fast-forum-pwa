import reactLogo from '../../assets/react.svg'
import styles from './header.module.scss'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

const Header = () => (
  <div className={styles.header}>
    <Link to="/" className={styles.logo}>
      <img src={reactLogo}  alt="React logo" />
    </Link>
    <nav style={{ display: 'inline-block', marginLeft: 20 }}>
      {routes.map(({ path }) => (
        <Link key={path} to={path} style={{ marginRight: 15 }}>
          {path === '/' ? 'Home' : path.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
        </Link>
      ))}
    </nav>
  </div>
)

export default Header
