import { Link } from "react-router-dom"
import Logo from "../../assets/icons/logo.svg?react"
import Close from "../../assets/icons/close.svg?react"
import Menu from "../../assets/icons/menu.svg?react"
import { NavHashLink } from "react-router-hash-link"
import { useState } from "react"

type NavItem = {
  name: string
  link: string
  arabicLabel: string
}

const MainNavbar = () => {


  const [menuOpened, setMenuOpened] = useState(false)
  const navList: NavItem[] = [
    { name: "main", link: "/b-v2-fe/#hero", arabicLabel: "الرئيسية" },
    { name: "about", link: "/b-v2-fe/#about", arabicLabel: " عن بصير " },
    { name: "services", link: "/b-v2-fe/#features", arabicLabel: " خدماتنا " },
    { name: "detection", link: "/b-v2-fe/detection", arabicLabel: "الكشف"},
    { name: "reports", link: "/b-v2-fe/reports", arabicLabel: "البلاغات" },
  ]



  return (
    <nav className="fixed z-50 w-full backdrop-blur-lg">
      <div className="mx-auto flex w-11/12  flex-row justify-between pb-2 md:pt-8 pt-2">
        <Logo className="md:flex hidden" />
        <div className=" md:hidden block relative">
          {menuOpened? <Close
          className="opacity-80 hover:opacity-50 absolute top-1/2 -translate-y-1/2"
           onClick={()=>setMenuOpened(false)}
          width={24} height={24} />: <Menu 
          onClick={()=>setMenuOpened(true)}
          width={24} height={24} className="opacity-80 hover:opacity-50 absolute top-1/2 -translate-y-1/2"/>}

          {<ul className={`absolute overflow-hidden  ${menuOpened? 'w-[50vw]':'!w-0'} backdrop-blur-lg transition-all duration-300 
           bg-darker/90 top-16 rounded-l-lg  `}>
            {navList.map((item: NavItem) => {
            return (
              <li
                key={item.name}
                className="text-sm  text-shadow-lg hover:text-white/60 p-3"
              >
                <NavHashLink
                  to={item.link}
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {item.arabicLabel}
                </NavHashLink>
              </li>
            )


        
          })}
          <li>    <Logo className="m-3 p-1 mx-auto" /></li>
            
            </ul>}

          



        </div>

        <ul className="md:flex hidden m-2 mx-auto  w-1/3 justify-around rounded-[999px] border border-white/10 bg-white/5 p-3">
          {navList.map((item: NavItem) => {
            return (
              <li
                key={item.name}
                className="text-sm text-shadow-lg hover:text-white/60"
              >
                <NavHashLink
                  to={item.link}
                  smooth
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {item.arabicLabel}
                </NavHashLink>
              </li>
            )
          })}
        </ul>



        <div className="actions flex flex-row justify-between">
          <button className="m-3 rounded-lg border border-primary/60 bg-gradient-to-b from-tertiary/75 to-tertiary/20 px-3 py-1 md:text-sm text-xs shadow-inner shadow-tertiary hover:shadow-2xl">
            <Link to="/b-v2-fe/detection">ابدأ الخدمة</Link>
          </button>

          {/* <ButtonGroup
            selectedItem={supportedLanguages[0]}
            items={supportedLanguages}
            onSelectionChange={(id) => {}}
          /> */}
        </div>
      </div>
      <div className="h-[2px] w-full bg-radial-gradient-border-navbar" />
    </nav>
  )
}

export default MainNavbar
