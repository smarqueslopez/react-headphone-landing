import classNames from 'classnames'
import Fade from 'react-reveal/Fade'
import style from './Discount.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Discount() {
  return (
    <section
      id='discount'
      className={classNames({
        [style.discount]: style.discount,
        [layout.section]: layout.section
      })}
    >
      <article
        className={classNames({
          [style.discount__container]: style.discount__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <Fade left>
          <div className={style.discount__animate}>
            <h2 className={style.discount__title}>
              Immerse yourself in your music
            </h2>
            <p className={style.discount__description}>
              Get it now, up to 50% off.
            </p>
            <a
              href='#'
              className={classNames({
                [layout.button]: layout.button,
                [layout['button--flex']]: layout['button--flex']
              })}
              title='Show now'
            >
              <i
                className={classNames('ri-shopping-bag-line', {
                  [layout.button__icon]: layout.button__icon
                })}
              ></i>
              Shop Now
            </a>
          </div>
        </Fade>
        <Fade right>
        <img
          src='/images/discount.png'
          alt='Beats Studio 3'
          title='Beats Studio 3'
          className={style.discount__img}
        />
        </Fade>
      </article>
    </section>
  )
}

export default Discount
