import { getSiteInfo } from '@/services'
import ui from '@/ui'
import Image from 'next/image'

export const Logo = async () => {
    const siteInfo = await getSiteInfo()
    return (
        <div className={ui.logo.container}>
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
