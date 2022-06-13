import {ReactComponent as Logo} from '../assets/images/logo.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from 'react';

const MenuItem = ({label, link, active, onClick}) => {
    return(
    <AnchorLink onClick={onClick} href={link} className={`menuItem py-4 px-6 text-white text-lg font-light transition-colors duration-300 ease-linear hover:text-[#61dafb] ${active && ' border-[#61dafb] border-b-4'}`} offset='60'>
        {label}
    </AnchorLink>
)}

const Menu = () => {
    const items = [{
        label: "Facts",
        href: "#facts"
    },{
        label: "Figures",
        href: "#figures"
    }]
    const [active, setActive] = useState(0)
    return(<header className="fixed inset-x-0 top-0 bg-[#20232a] grid">
        <div className='max-w-[1260px] w-full justify-self-center flex justify-between'>

        <div className='flex gap-2.5 items-center'>
            <Logo height={20}/>
            <span className='text-xl font-bold text-white'>React</span>
        </div>
        <ul className='flex'>
            {items.map((item,i)=><MenuItem onClick={()=>setActive(i)} key={i} active={i===active} label={item.label} link={item.href}/>)}
        </ul>
        </div>
        </header>)
}

export default Menu