import classNames from 'classnames'
import style from './Home.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Home() {
  return (
    <section
      id='home'
      className={classNames({
        [style.home]: style.home,
        [layout.section]: layout.section
      })}
    >
      <article
        className={classNames({
          [style.home__container]: style.home__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <div>
          <img
            src='/images/home.png'
            className={style.home__img}
            alt='Beats Studio 3'
            title='Beats Studio 3'
          />
        </div>

        <div className={style.home__data}>
          <div className={style.home__header}>
            <h1 className={style.home__title}>On ear</h1>
            <h2 className={style.home__subtitle}>Beats 3</h2>
          </div>
          <div className={style.home__footer}>
            <h3 className={style['home__title-description']}>Overview</h3>
            <p className={style.home__description}>
              Enjoy award-winning Beats sound with wireless listening freedom
              and a sleek, streamlined design with comfortable padded earphones,
              delivering first-rate playback.
            </p>
            <a
              href='#'
              className={classNames({
                [layout.button]: layout.button,
                [layout['button--flex']]: layout['button--flex']
              })}
            >
              <span className={layout['button--flex']}>
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
                Add to Bag
              </span>
              <span className='home__price'>$299</span>
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Home
