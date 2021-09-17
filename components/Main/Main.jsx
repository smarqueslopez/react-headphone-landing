import Home from './Home/Home'
import SponsorList from './SponsorList/SponsorList'
import Specs from './Specs/Specs'
import Case from './Case/Case'
import Discount from './Discount/Discount'
import Products from './Products/Products'
import style from './Main.module.scss'

function Main() {
  return (
    <main className={style.main}>
      <Home />
      <SponsorList />
      <Specs />
      <Case />
      <Discount />
      <Products />
    </main>
  )
}

export default Main
