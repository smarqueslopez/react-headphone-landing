import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
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
      <Fade top cascade>
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
                <a href='#' className={style.footer__link} title='Headphones'>
                  Headphones
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Earphones'>
                  Earphones
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Earbuds'>
                  Earbuds
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Accesories'>
                  Accesories
                </a>
              </li>
            </ul>
          </div>

          <div className={style.footer__content}>
            <h3 className={style.footer__title}>Support</h3>
            <ul className={style.footer__links}>
              <li>
                <a href='#' className={style.footer__link} title='Product Help'>
                  Product Help
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Register'>
                  Register
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Updates'>
                  Updates
                </a>
              </li>
              <li>
                <a href='#' className={style.footer__link} title='Provides'>
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
                title='Subscribe now!'
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
                title='Facebook'
              >
                <i className='ri-facebook-fill'></i>
              </a>
              <a
                href='https://www.instagram.com/'
                className={style['footer__social-link']}
                target='_blank'
                rel='noreferrer'
                title='Instagram'
              >
                <i className='ri-instagram-line'></i>
              </a>
              <a
                href='https://www.twitter.com/'
                className={style['footer__social-link']}
                target='_blank'
                rel='noreferrer'
                title='Twitter'
              >
                <i className='ri-twitter-line'></i>
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade top>
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
      </Fade>
    </footer>
  )
}

export default Footer
