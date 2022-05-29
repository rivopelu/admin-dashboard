import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { faChartBar, faArrowLeft, faBaseball, faDashboard, faGear, faFile, faSearch, faCalendar, faUser, faMessage, faFolder } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const SideBarComp = () => {

    const [open, setOpen] = useState(true);

    const Menus = [

        { title: "Dashboard", src: '/', icon: faDashboard, gap: false },
        { title: "Inbox", src: '/inbox', icon: faMessage, gap: true },
        { title: "Accoutns", src: '/account', icon: faUser, gap: false },
        { title: "Schedule", src: '/schedule', icon: faCalendar, gap: false },
        { title: "Search", src: '/search', icon: faSearch, gap: false },
        { title: "Analytics", src: '/analitic', icon: faChartBar, gap: true },
        { title: "Files", src: '/file', icon: faFolder, gap: false },
        { title: "Setting", src: '/setting', icon: faGear, gap: false },
    ]

    return (
        <div className={`sidebar ${open ? 'w-72' : 'w-[82.5px]'} h-screen bg-pink-900 relative duration-200 pt-9  p-3`}>


            <FontAwesomeIcon icon={faArrowLeft} onClick={() => setOpen(!open)}
                className={`absolute cursor-pointer  -right-5 top-9  border-4 duration-700 border-pink-900 rounded-full bg-white h-5 w-5 p-1 flex  text-pink-900 ${open ? '' : 'rotate-180'}`} />
            {/* LOGON ICON */}
            <div className="flex gap-2 items-center px-2">

                <FontAwesomeIcon icon={faBaseball} className={`cursor-pointer duration-300 h-5 w-5 p-3 bg-pink-600 text-white rounded-lg`} />
                <div className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>AdminDashboard</div>
            </div>

            <ul className='pt-6 navlist'>
                {
                    Menus.map((item, i) => (
                        <NavLink activeClassName='active' to={item.src} key={i} className={`text-gray-300 text-sm flex items-center gap-x-3  p-2 hover:bg-pink-800 rounded-lg cursor-pointer border border-transparent navlink ${item.gap ? 'mt-9' : 'mt-1'}`}>


                            <FontAwesomeIcon icon={item.icon} className='text-xl bg-black/25 w-4 h-4 p-3 rounded-md' />
                            <h1 className={`text-sm ${!open && 'scale-0'} duration-200`}>{item.title}</h1>

                        </NavLink>
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBarComp
