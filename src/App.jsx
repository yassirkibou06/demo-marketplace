import './App.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ShowLogin from './components/login&register/ShowLogin';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import { BiSearchAlt2 } from 'react-icons/bi';
//shadcn ui
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';
import { BsFillPersonFill } from 'react-icons/bs';
import SideBar from './components/SideBar';
import { FiMenu } from 'react-icons/fi';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger } from './components/ui/navigation-menu';
import ScrollToTopButton from './components/ScrollToTopButton';


function App() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const categories = [
    {
      title: "Coaching",
      href: "/coaching",
    },
    {
      title: "Online Business",
      href: "/onlineBusiness",
    },
    {
      title: "Passive Income",
      href: "/passiveIncome",
    },
    {
      title: "Photography",
      href: "/photography",
    },
    {
      title: "Teacher Training",
      href: "/teacherTraining",
    },
    {
      title: "Teaching Online",
      href: "/teachingOnline",
    },
  ]
  const pages = [
    {
      title: "Instructors",
      href: "/instructors",
    },
    {
      title: "Portfolio Masonry",
      href: "/portfolio Masonry",
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ]


  return (
    <div className='font-poppins'>
      <div>
        <p className='text-[17px] bg-blue-500 text-white p-2 text-center'>Special welcome gift. Get 30% off your first purchase with code “Eduma”. <Link className='font-medium' to={"/courses"}>Find out more!</Link></p>
      </div>
      {/** ==> NavbarTop  */}
      <div className="px-5 md:px-16">
        <div className='mt-3 flex gap-0 md:gap-40 items-center justify-between md:justify-center'>
          <div className='block md:flex items-center gap-5'>
            <img className='w-[128px] h-[29px]' src="https://eduma.thimpress.com/demo-marketplace/wp-content/uploads/sites/99/2019/02/logo-footer.svg" alt="" />
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger ><a className="text-base font-normal Hover" href="/">Categories</a></NavigationMenuTrigger>
                  <NavigationMenuContent className="p-3 absolute z-[3000] bg-white">
                    <ul className="flex flex-col gap-5 w-[200px]">
                      {categories.map((component) => (
                        <li>
                          <a className='Hover' href={component.href}>{component.title}</a>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-1 md:space-x-2 bg-[#e1e9fd] w-[200px] md:w-full rounded-lg p-1">
            <BiSearchAlt2 className='cursor-pointer text-2xl ml-5 mt-1 md:mt-0' />
            <Input type="text" className="px-3 py-2 border-none shadow-none placeholder:text-gray-800 placeholder:text-xs md:placeholder:text-sm" placeholder="Search for anythings..." />
          </div>
        </div>
        {/** ==> NavbarBottom   */}
        <nav className='z-0 flex items-center justify-between border-t border-gray-200 mt-2'>
          <ul className='hidden z-0 md:flex space-x-2 items-center mt-3'>
            <li className={location.pathname === '/' ? 'Hover' : ''}>
              <Link className="navLink" to="/">Home</Link>
            </li>
            <li className={location.pathname === '/courses' ? 'Hover' : ''}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger ><a className="navLink text-[16px]" href="/">Courses</a></NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3">
                      <ul className="flex flex-col gap-5 w-[200px]">
                      {categories.map((component) => (
                        <li>
                          <a className='hover:text-blue-600' href={component.href}>{component.title}</a>
                        </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li className={location.pathname === '/' ? 'Hover' : ''}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger ><a className="navLink text-[16px]" href="/">Pages</a></NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3">
                      <ul className="flex flex-col gap-5 w-[200px]">
                        {pages.map((component) => (
                        <li>
                          <a className='hover:text-blue-600' href={component.href}>{component.title}</a>
                        </li>
                      ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li className={location.pathname === '/' ? 'Hover' : ''}>
              <Link className="navLink" to="/events">Events</Link>
            </li>
            <li className={location.pathname === '/blog' ? 'Hover' : ''}>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger ><a className="navLink text-[16px]" href="/">Blog</a></NavigationMenuTrigger>
                    <NavigationMenuContent className="p-3">
                      <ul className="flex flex-col gap-5 w-[200px]">
                        {categories.map((component) => (
                          <li>
                            <a className='hover:text-blue-600' href={component.href}>{component.title}</a>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </li>
            <li className={location.pathname === '/' ? 'Hover' : ''}>
              <Link className="navLink" to="/events">Become an Instructor</Link>
            </li>
          </ul>
            <FiMenu className="block md:hidden text-2xl cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <div className="flex items-center space-x-4 mt-3">
            <Button className="bg-blue-500 hover:bg-blue-500/80 p-5" ><a href="/">Get Started</a></Button>
            <motion.div>
              <div>
                <button className="flex items-center font-medium text-black text-base" onClick={() => setShow(!show)}><BsFillPersonFill className="mr-2" /> Login In</button>
              </div>
              <AnimatePresence>
                {show && <ShowLogin show={show} setShow={setShow} />}
              </AnimatePresence>
            </motion.div>
          </div>
        </nav>
      </div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} location={location} categories={categories} pages={pages} />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

    </div>
  )
}
export default App;
