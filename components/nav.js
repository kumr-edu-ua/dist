import Link from 'next/link';
import Logo from './logo';
import { AiOutlineMenu, AiOutlineCaretDown } from 'react-icons/ai';
import { useState } from 'react';

const Menu = [
  { text: 'Вступникам', href: '/admission' },
  { text: 'Студентам', href: '/students' },
  { text: 'Наука', href: '/academics' },
  { text: 'Суспільство', href: '/society' },
  {
    text: 'Університет', href: '/university',
    submenu: [
      { text: 'Адміністрація', href: '/university/leadership' },
      { text: 'Контакти', href: '/university/contacts' }
    ]
  }
];

export default function Nav({ dark }) {
  const [showCompactMenu, setShowCompactMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState('')

  const onHamburgerClick = (value) => {
    setShowCompactMenu(value || !showCompactMenu)
  }

  const onDropdownMouseEnter = (value) => {
    setShowSubMenu(value)
  }

  const onDropdownMouseLeave = () => {
    setShowSubMenu('')
  }

  return (
    <nav className={`${dark ? 'text-white' : ''} flex justify-between items-center`} >
      <div>
        <Link href={'/'} >
          <Logo />
        </Link>
      </div>

      <div className='hidden xl:flex'>
        {
          Menu.map((item, index) => (
            <div className='m-5 inline-block' key={index}>
              {item.submenu ?
                <div onMouseEnter={() => onDropdownMouseEnter(item.text)} onMouseLeave={onDropdownMouseLeave}>
                  <button className='p-0'>{item.text}
                    <AiOutlineCaretDown size={12} className='inline-block mx-1' />
                  </button>
                  <div className={`${showSubMenu === item.text ? 'flex flex-col' : 'hidden'} absolute`} >
                    {
                      item.submenu.map((subitem, subindex) => (
                        <Link href={subitem.href} key={subindex} className={`${dark ? 'border-white' : 'border-black'} border-b-2 border-opacity-0 hover:border-opacity-100 `}>
                          {subitem.text}
                        </Link>
                      ))
                    }
                  </div>
                </div> :
                <Link href={item.href} className={`${dark ? 'border-white' : 'border-black'} border-b-2 border-opacity-0 hover:border-opacity-100 `}>
                  {item.text}
                </Link>
              }
            </div>
          ))
        }
      </div>

      <div onClick={() => onHamburgerClick()} className='xl:hidden cursor-pointer'>
        <AiOutlineMenu size={32} className='m-5' />
      </div>

      <div className={`${showCompactMenu ? 'flex flex-col fixed left-0 top-0 w-[50%] h-[100%] bg-black opacity-90' : 'hidden'} xl:hidden`}>
        {
          Menu.map((item, index) => (
            <div className='m-5 text-xl text-white' key={index}>
              <Link onClick={() => onHamburgerClick(false)} href={item.href} className='hover:border-b-2 hover:border-white'>
                {item.text}
              </Link>
            </div>))
        }
      </div>
    </nav>
  )
}
