import { FC, useEffect } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

// import Logo from '';

const Navbar: FC = () => {
  // Navbar fixed position if scrolling
  useEffect(() => {
    window.onscroll = () => {
      const header = document.querySelector('header');
      const fixNav = header?.offsetTop ?? 0;

      if (window.pageYOffset > fixNav) {
        header?.classList.add(styles.navbarFixed);
      } else {
        header?.classList.remove(styles.navbarFixed);
      }
    };
  }, []);

  // Hamburger menu handler
  const hamburgerHandler = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#navMenu');

    hamburger?.addEventListener('click', () => {
      hamburger.classList.toggle(styles.hamburgerActive);
      navMenu?.classList.toggle('hidden');
    });
  };

  return (
    <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/">
                <a className="block py-6">
                  Wikusama Hotel
                  {/* <Image src={Logo} width={100} height={40} alt="Logo Brand" /> */}
                </a>
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
                onClick={hamburgerHandler}
              >
                <span
                  className={`${styles.hamburgerLine} origin-top-left transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} transition duration-300 ease-in-out`}
                ></span>
                <span
                  className={`${styles.hamburgerLine} origin-bottom-left transition duration-300 ease-in-out`}
                ></span>
              </button>

              <nav
                id="navMenu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex">
                  <li className="group">
                    <Link href="/">
                      <a className="text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#ff0000] transition duration-300 ease-in-out">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <a className="text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#ff0000] transition duration-300 ease-in-out">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <a className="text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#ff0000] transition duration-300 ease-in-out">
                        Service
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <a className="text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#ff0000] transition duration-300 ease-in-out">
                        Projects
                      </a>
                    </Link>
                  </li>
                  <li className="group">
                    <Link href="/">
                      <a className="text-base text-black py-2 mx-8 lg:mx-2 flex group-hover:text-[#ff0000] transition duration-300 ease-in-out">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
