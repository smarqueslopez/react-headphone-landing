import { useEffect } from 'react'
import classNames from 'classnames'
import style from './ScrollUp.module.scss'
import layout from '../../styles/Layout.module.scss'

function ScrollUp() {
  useEffect(() => {
    const scrollUp = document.getElementById('scroll-up')
    window.onscroll = (e) => {
      window.scrollY >= 200
        ? scrollUp.classList.add(style['scroll-up--show'])
        : scrollUp.classList.remove(style['scroll-up--show'])
    }
  }, [])

  return (
    <a href='#' className={style['scroll-up']} id='scroll-up'>
      <i
        className={classNames('ri-arrow-up-s-line', {
          [style['scroll-up__icon']]: style['scroll-up__icon']
        })}
      ></i>
    </a>
  )
}

export default ScrollUp
