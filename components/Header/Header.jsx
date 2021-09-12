import classNames from 'classnames'
import style from './Header.module.scss'
import layout from '../../styles/Layout.module.scss'
import { useState } from 'react'

function Header() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = (e) => {
    if (e.target.tagName === 'A') {
      setToggle(!toggle)
    }
  }

  return (
    <header className={style.header} id='header'>
      <nav
        className={classNames({
          [style.nav]: style.nav,
          [layout.container]: layout.container
        })}
      >
        <a href='#' className={style.nav__logo}>
          <img src='/images/logo.png' alt='Beats Logo' title='Beats Logo' />
        </a>
        <div
          className={classNames({
            [style.nav__menu]: style.nav__menu,
            [style['menu-show']]: toggle
          })}
        >
          <ul className={style.nav__list} onClick={clickHandler}>
            <li className={style.nav__item}>
              <a href='#home' className={style.nav__link} title="Home">
                Home
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#specs' className={style.nav__link} title="Specs">
                Specs
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#case' className={style.nav__link} title="Case">
                Case
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#products' className={style.nav__link} title="Products">
                Products
              </a>
            </li>
          </ul>
          <div className={style.nav__close} onClick={() => setToggle(!toggle)}>
            <i className='ri-close-line'></i>
          </div>
        </div>
        <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
          <i className='ri-function-line'></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
