import { useState, useEffect } from 'react'
import classNames from 'classnames'
import style from './Header.module.scss'
import layout from '../../styles/Layout.module.scss'
import useWindowDimensions from '../../hooks/useWindowDimensions'

function Header() {
  const [toggle, setToggle] = useState(false)
  const { width } = useWindowDimensions()

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const header = document.getElementById('header')
      window.scrollY >= 50
        ? header.classList.add(style['scroll-header'])
        : header.classList.remove(style['scroll-header'])
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const navMenu = classNames(style.nav__menu)
      if (navMenu) {
        const sectionList = document.querySelectorAll('section[id]')
        sectionList.forEach((section) => {
          const sectionId = section.getAttribute('id')
          const querySelector = `.${navMenu} a[href*='${sectionId}']`
          const menuItem = document.querySelector(querySelector)
          if (menuItem) {
            const scrollY = window.scrollY
            const sectionTop = section.offsetTop - 50
            const activeLinkClass = classNames(style['nav__link--active'])
            if (
              scrollY > sectionTop &&
              scrollY <= sectionTop + section.offsetHeight
            ) {
              menuItem.classList.add(activeLinkClass)
            } else {
              menuItem.classList.remove(activeLinkClass)
            }
          }
        })
      }
    })
  })

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
            [style['menu-show']]: toggle || width >= 767
          })}
        >
          <ul className={style.nav__list} onClick={clickHandler}>
            <li className={style.nav__item}>
              <a
                href='#home'
                className={classNames({
                  [style.nav__link]: style.nav__link,
                  [style['nav__link--active']]: style['nav__link--active']
                })}
                title='Home'
              >
                Home
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#specs' className={style.nav__link} title='Specs'>
                Specs
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#case' className={style.nav__link} title='Case'>
                Case
              </a>
            </li>
            <li className={style.nav__item}>
              <a href='#products' className={style.nav__link} title='Products'>
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
