import classNames from 'classnames'
import style from './Case.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Case() {
  return (
    <section
      id='case'
      className={classNames({
        [style.case]: style.case,
        [layout.section]: layout.section,
        [layout.grid]: layout.grid
      })}
    >
      <article>
        <h2
          className={classNames({
            [layout.section__title]: layout.section__title,
            [layout['section__title-gradient']]:
              layout['section__title-gradient']
          })}
        >
          Case
        </h2>
        <div
          className={classNames({
            [style.case__container]: style.case__container,
            [layout.container]: layout.container,
            [layout.grid]: layout.grid
          })}
        >
          <div>
            <img
              src='/images/case.png'
              className={style.case__img}
              alt='case'
              title='case'
            />
          </div>

          <div className={style.case__data}>
            <p className={style.case__description}>
              With a comfortable and adaptable case so that you can store it
              whenever you want, and keep your durability forever.
            </p>
            <a
              href='#'
              className={classNames({
                [layout.button]: layout.button,
                [layout['button--flex']]: layout['button--flex']
              })}
            >
              <i
                className={classNames('ri-information-line', {
                  [layout.button__icon]: layout.button__icon
                })}
              ></i>
              More info
            </a>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Case
