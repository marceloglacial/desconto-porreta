import { Icon } from '@/components'
import { SocialItemType, getSocial } from '@/services/social'
import Link from 'next/link'
import { Tooltip } from '@/components'

export const SocialBar = async (): Promise<JSX.Element> => {
    const socialItems = await getSocial()

    return (
        <div className='socialbar flex flex-nowrap items-center gap-2 sm:gap-4'>
            {socialItems.data.map((item: SocialItemType, index: number) => {
                return (
                    <Tooltip text={item.title} key={index}>
                        <Link href={`/${item.icon}`} target='_blank'>
                            <Icon icon={item.icon} />
                        </Link>
                    </Tooltip>
                )
            })}
        </div>
    )
}
