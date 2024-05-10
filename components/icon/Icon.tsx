import { FC } from 'react';
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiTiktokLine } from "react-icons/ri";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
const icons = {
    twitter: <FaXTwitter className='w-full h-full' />,
    whatsapp: <FaWhatsapp className='w-full h-full' />,
    tiktok: <RiTiktokLine className='w-full h-full' />,
    instagram: <FaInstagram className='w-full h-full' />,
    email: <MdOutlineMarkEmailUnread className='w-full h-full' />
}

export interface IconProps {
    icon: keyof typeof icons;
}

export const Icon: FC<IconProps> = ({ icon }): JSX.Element => {
    return <div className=' text-black  w-6 h-6 sm:w-8 sm:h-8'>
        {icons[icon]}
    </div>
}
