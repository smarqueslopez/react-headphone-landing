import classNames from 'classnames'
import style from './Footer.module.scss'
import layout from '../../styles/Layout.module.scss'

function Footer() {
  return (
    <footer
      className={classNames({
        [style.footer]: style.footer,
        [layout.section]: layout.section
      })}
      id='footer'
    >
      <div
        className={classNames({
          [style.footer__container]: style.footer__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <a href='#' className={style.footer__logo}>
          <img src='/images/logo.png' alt='Beat Logo' title='Beat Logo' />
        </a>

        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Products</h3>
          <ul className={style.footer__links}>
            <li>
              <a href='#' className={style.footer__link}>
                Headphones
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Earphones
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Earbuds
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Accesories
              </a>
            </li>
          </ul>
        </div>

        <div className={style.footer__content}>
          <h3 className={style.footer__title}>Support</h3>
          <ul className={style.footer__links}>
            <li>
              <a href='#' className={style.footer__link}>
                Product Help
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Register
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Updates
              </a>
            </li>
            <li>
              <a href='#' className={style.footer__link}>
                Provides
              </a>
            </li>
          </ul>
        </div>

        <div className={style.footer__content}>
          <form action='' className={style.footer__form}>
            <input
              className={style.footer__input}
              type='email'
              placeholder='Email'
            />
            <button
              className={classNames({
                [layout.button]: layout.button,
                [layout['button--flex']]: layout['button--flex']
              })}
            >
              <i
                className={classNames('ri-send-plane-line', {
                  [layout.button__icon]: layout.button__icon
                })}
              ></i>
              Subscribe
            </button>
          </form>
          <div className={style.footer__social}>
            <a
              href='https://www.facebook.com/'
              className={style['footer__social-link']}
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-facebook-fill'></i>
            </a>
            <a
              href='https://www.instagram.com/'
              className={style['footer__social-link']}
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-instagram-line'></i>
            </a>
            <a
              href='https://www.twitter.com/'
              className={style['footer__social-link']}
              target='_blank'
              rel='noreferrer'
            >
              <i className='ri-twitter-line'></i>
            </a>
          </div>
        </div>
      </div>

      <p className={style.footer__copy}>
        <a
          href='https://www.beatsbydre.com/'
          className={style['footer__copy-link']}
          target='_blank'
          rel='noreferrer'
        >
          Copyright &#169; Beats by Dre. All right reserved.
        </a>
      </p>
    </footer>
  )
}

export default Footer
