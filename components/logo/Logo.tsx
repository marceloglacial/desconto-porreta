import { getSiteInfo } from '@/services'
import Image from 'next/image'

export const Logo = async () => {
    const siteInfo = await getSiteInfo()
    return (
        <div className='logo relative w-[187px] h-[50px] lg:w-[264px] lg:h-[85px]'>
            <Image
                src={siteInfo.logo}
                alt={'desconto porreta logo'}
                sizes='(max-width: 300px) 100vw, (max-width: 150px) 50vw, 33vw"'
                layout='responsive'
                priority
                width={300}
                height={100}
            />
        </div>
    )
}
