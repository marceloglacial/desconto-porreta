import { FC } from 'react'
import { FaWhatsapp, FaInstagram, FaSearchDollar } from 'react-icons/fa'
import { RiTiktokLine } from 'react-icons/ri'
import { MdOutlineMarkEmailUnread } from 'react-icons/md'
import { FaXTwitter } from 'react-icons/fa6'
const icons = {
    twitter: <FaXTwitter className='w-full h-full' />,
    whatsapp: <FaWhatsapp className='w-full h-full' />,
    tiktok: <RiTiktokLine className='w-full h-full' />,
    instagram: <FaInstagram className='w-full h-full' />,
    email: <MdOutlineMarkEmailUnread className='w-full h-full' />,
    search: <FaSearchDollar className='w-full h-full' />,
}

export interface IconProps {
    icon: keyof typeof icons
    size?: number
}

export const Icon: FC<IconProps> = ({ icon, size }): JSX.Element => {
    return (
        <div className={`text-black  w-6 h-${size || 6} sm:w-${size || 8} sm:h-${size || 8}`}>
            {icons[icon]}
        </div>
    )
}
