import Image from "next/image";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <header id="navbar" className={styles.navbar}>
          <nav>
            <a href="/">
              <Image src="/images/nav_logo.png" alt="logo" width={132.43} height={41.41}/>
            </a>
            <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/blog">Blog</a>
                </li>
            </ul>
      </nav>
    </header>
  )
}

export default Navbar
