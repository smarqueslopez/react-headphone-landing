import classNames from 'classnames'
import style from './Specs.module.scss'
import layout from '../../../styles/Layout.module.scss'

function Specs() {
  return (
    <section
      id='specs'
      className={classNames({
        [style.specs]: style.specs,
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
          Specs
        </h2>
        <div
          className={classNames({
            [style.specs__container]: style.specs__container,
            [layout.container]: layout.container,
            [layout.grid]: layout.grid
          })}
        >
          <div
            className={classNames({
              [style.specs__content]: style.specs__content,
              [layout.grid]: layout.grid
            })}
          >
            <div className={style.specs__data}>
              <i
                className={classNames('ri-bluetooth-line', {
                  [style.specs__icon]: style.specs__icon
                })}
              ></i>
              <h3 className={style.specs__title}>Connection</h3>
              <span className={style.specs__subtitle}>Bluetooth v5.2</span>
            </div>

            <div className={style.specs__data}>
              <i
                className={classNames('ri-battery-charge-line', {
                  [style.specs__icon]: style.specs__icon
                })}
              ></i>
              <h3 className={style.specs__title}>Battery</h3>
              <span className={style.specs__subtitle}>Duration 40h</span>
            </div>

            <div className={style.specs__data}>
              <i
                className={classNames('ri-plug-line', {
                  [style.specs__icon]: style.specs__icon
                })}
              ></i>
              <h3 className={style.specs__title}>Load</h3>
              <span className={style.specs__subtitle}>Fast charge 4.2-AAC</span>
            </div>

            <div className={style.specs__data}>
              <i
                className={classNames('ri-mic-line', {
                  [style.specs__icon]: style.specs__icon
                })}
              ></i>
              <h3 className={style.specs__title}>Microphone</h3>
              <span className={style.specs__subtitle}>
                Supports Apple Siri and Google
              </span>
            </div>
            <div>
              <img
                src='/images/specs.png'
                className={style.specs__img}
                alt='specs'
                title='specs'
              />
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Specs
