import React, { useEffect, useState } from "react"
import "./Header.css"
const Header = () => {
  const [offset, setOffset] = useState(window.scrollY)
  const classes = {
    normal: "navItem",
    active: "navItem active",
  }

  window.addEventListener("scroll", () => {
    setOffset(window.scrollY)
  })
  const [burgerClass, setBurgerClass] = useState("burger")
  const [menuItems, setMenuItems] = useState([
    { label: "Introduction", class: classes.active },
    { label: "Projects", class: classes.normal },
    { label: "Experience", class: classes.normal },
    { label: "Connect", class: classes.normal },
  ])
  const handleBurgerClick = () => {
    if (burgerClass.includes("close")) {
      setBurgerClass("burger")
    } else {
      setBurgerClass("burger close")
    }
  }
  useEffect(() => {
    setMenuItems((prev) =>
      prev.map((newItem, index) => {
        console.log({ f: Math.floor(offset / 600) })
        if (index === Math.floor(offset / 650)) {
          return { ...newItem, class: classes.active }
        } else {
          return { ...newItem, class: classes.normal }
        }
      })
    )
  }, [offset, classes.active, classes.normal])

  return (
    <div className="header">
      <div className="title">
        <p>V</p>
        <p>L</p>
      </div>
      <ul className="navLinks">
        {menuItems.map((item, index) => {
          return (
            <li key={item.label} className={item.class}>
              <a
                href={`#${item.label}`}
                onClick={() => {
                  setMenuItems((prev) =>
                    prev.map((newItem) => {
                      if (item.label === newItem.label) {
                        return { ...newItem, class: classes.active }
                      } else {
                        return { ...newItem, class: classes.normal }
                      }
                    })
                  )
                }}
              >
                0{index + 1}. {item.label}
              </a>
            </li>
          )
        })}
      </ul>
      <div className={burgerClass} onClick={handleBurgerClick}>
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default Header
