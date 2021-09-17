import classNames from 'classnames'
import style from './Products.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Products() {
  return (
    <section
      id='products'
      className={classNames({
        [style.products]: style.products,
        [layout.section]: layout.section
      })}
    >
      <article>
        <h2
          className={classNames({
            [layout.section__title]: layout.section__title,
            [layout['section__title-gradient']]:
              layout['section__title-gradient'],
            [style.products__line]: style.products__line
          })}
        >
          Choose Your Style
        </h2>
        <div
          className={classNames({
            [style.products__container]: style.products__container,
            [layout.container]: layout.container,
            [layout.grid]: layout.grid
          })}
        >
          <div className={style.products__card}>
            <figure className={style.products__content}>
              <img
                src='/images/product1.png'
                className={style.products__img}
                alt='product1'
                title='product1'
              />
            </figure>
            <figcaption className={style.products__caption}>
              <h3 className={style.products__title}>Black</h3>
              <span className={style.products__price}>$249</span>
              <button
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex'],
                  [style.products__button]: style.products__button
                })}
              >
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
              </button>
            </figcaption>
          </div>

          <div className={style.products__card}>
            <figure className={style.products__content}>
              <img
                src='/images/product2.png'
                className={style.products__img}
                alt='product2'
                title='product2'
              />
            </figure>
            <figcaption className={style.products__caption}>
              <h3 className={style.products__title}>Red Black</h3>
              <span className={style.products__price}>$249</span>
              <button
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex'],
                  [style.products__button]: style.products__button
                })}
              >
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
              </button>
            </figcaption>
          </div>

          <div className={style.products__card}>
            <figure className={style.products__content}>
              <img
                src='/images/product3.png'
                className={style.products__img}
                alt='product3'
                title='product3'
              />
            </figure>
            <figcaption className={style.products__caption}>
              <h3 className={style.products__title}>Night Black</h3>
              <span className={style.products__price}>$249</span>
              <button
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex'],
                  [style.products__button]: style.products__button
                })}
              >
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
              </button>
            </figcaption>
          </div>

          <div className={style.products__card}>
            <figure className={style.products__content}>
              <img
                src='/images/product4.png'
                className={style.products__img}
                alt='product4'
                title='product4'
              />
            </figure>
            <figcaption className={style.products__caption}>
              <h3 className={style.products__title}>Blue</h3>
              <span className={style.products__price}>$249</span>
              <button
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex'],
                  [style.products__button]: style.products__button
                })}
              >
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
              </button>
            </figcaption>
          </div>

          <div className={style.products__card}>
            <figure className={style.products__content}>
              <img
                src='/images/product5.png'
                className={style.products__img}
                alt='product4'
                title='product4'
              />
            </figure>
            <figcaption className={style.products__caption}>
              <h3 className={style.products__title}>Twilight gray</h3>
              <span className={style.products__price}>$249</span>
              <button
                className={classNames({
                  [layout.button]: layout.button,
                  [layout['button--flex']]: layout['button--flex'],
                  [style.products__button]: style.products__button
                })}
              >
                <i
                  className={classNames('ri-shopping-bag-line', {
                    [layout.button__icon]: layout.button__icon
                  })}
                ></i>
              </button>
            </figcaption>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Products
