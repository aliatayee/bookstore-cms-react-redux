import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';
import { HiUser } from 'react-icons/hi';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/category',
      text: 'Category',
    },

  ];
  return (
    <>
      <div className="navBg" />
      <nav className="relative flex flex-wrap bg-white items-center border-b border-slate-200 justify-between px-2 py-3 mb-3 nav-layout">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-blue-500 text-xl"
              href="/"
            >
              Bookstore CMS
            </a>
            <button
              className="text-blue-500 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiAlignRight />
            </button>
          </div>
          <div
            className={
              `lg:flex flex-grow justify-between items-center${
                navbarOpen ? ' flex' : ' hidden'}`
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none ">
              {links.map((link) => (
                <li className="nav-item px-3 py-2 font-mono flex items-center text-gray-400 text-lg hover:opacity-75" key={link.id}>
                  <NavLink to={link.path} className={({ isActive }) => (isActive ? 'active-link' : 'link-text')}>
                    {link.text}
                  </NavLink>

                </li>
              ))}
            </ul>
            <div className="flex flex-col lg:flex-row list-none ">
              <li className="p-3 border border-slate-300 text-right rounded-full text-blue-500 font-md"><HiUser /></li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
