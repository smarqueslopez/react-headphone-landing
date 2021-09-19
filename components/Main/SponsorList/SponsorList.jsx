import classNames from 'classnames'
import Zoom from 'react-reveal/Zoom'
import style from './SponsorList.module.scss'
import layout from '../../../styles/Layout.module.scss'

function SponsorList() {
  return (
    <section
      id='sponsors'
      className={classNames({
        [style.sponsor]: style.sponsor,
        [layout.section]: layout.section
      })}
    >
      <article
        className={classNames({
          [style.sponsor__container]: style.sponsor__container,
          [layout.container]: layout.container,
          [layout.grid]: layout.grid
        })}
      >
        <Zoom cascade>
          <a href='https://www.apple.com/' target='_blank' rel='noreferrer'>
            <img
              src='/images/sponsor1.png'
              alt='Apple'
              title='Apple'
              className={style.sponsor__img}
            />
          </a>
          <a href='https://www.spotify.com/' target='_blank' rel='noreferrer'>
            <img
              src='/images/sponsor2.png'
              alt='Spotify'
              title='Spotify'
              className={style.sponsor__img}
            />
          </a>
          <a href='https://www.amazon.com/' target='_blank' rel='noreferrer'>
            <img
              src='/images/sponsor3.png'
              alt='Amazon'
              title='Amazon'
              className={style.sponsor__img}
            />
          </a>
          <a href='https://www.youtube.com/' target='_blank' rel='noreferrer'>
            <img
              src='/images/sponsor4.png'
              alt='Youtube'
              title='Youtube'
              className={style.sponsor__img}
            />
          </a>
        </Zoom>
      </article>
    </section>
  )
}

export default SponsorList
