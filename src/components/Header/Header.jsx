import React from 'react';
import clsx from 'clsx'
import styles from './Header.module.css';
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ReactComponent as Logo } from '../../static/logo.svg';
import i18n from '../../i18n';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className={styles.headerContainer}>
      <div className={styles.flex}>
        <div className={styles.headerHamburger}>
          <MenuIcon 
            role="img" 
            aria-label="hamburger menu icon" 
            className={clsx(styles.icon, styles.hamburgerIcon)} 
          />
        </div>
        <nav>
          <Link 
            to="/homes/1" 
            className={clsx(styles.headerNavLink, currentPath.includes('/homes') ? styles.headerNavLinkSelected : '')}
          >
            <span>{i18n.HOMES}</span>
          </Link>
          <Link 
            to="/hosts" 
            className={clsx(styles.headerNavLink, currentPath.includes('/hosts') ? styles.headerNavLinkSelected : '')}
          >
            <span>{i18n.HOSTS}</span>
          </Link>
        </nav>
      </div>
      
      <div className={styles.headerLogo}>
        <Logo role="img" aria-label="Plum Guide logo" />
      </div>

      <div className={styles.flex}> 
        <div className={styles.headerButtons}>
          <button>
            {i18n.NEED_HELP}
          </button>
          <button>
            {i18n.LOGIN}
          </button>
        </div>
        <form role="search" className={styles.headerSearch}>
          <SearchIcon 
            role="img" 
            aria-label="search icon"
            className={clsx(styles.icon, styles.searchIcon)} 
          />
        </form>
      </div>
    </header>
  )
}

export default Header;