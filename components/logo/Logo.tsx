import { getSiteInfo } from '@/services'
import ui from '@/ui'
import Image from 'next/image'

export const Logo = async () => {
    const siteInfo = await getSiteInfo()
    return <div className={ui.logo.contianer}>
        <Image src={siteInfo.logo} alt={'desconto porreta logo'} fill />
    </div>
}
