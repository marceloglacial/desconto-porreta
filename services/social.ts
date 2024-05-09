import { IconProps } from '@/components';

export type SocialItemType = {
    link: string,
    title: string
} & IconProps

export const getSocial = async (): Promise<IPromise> => {
    const iconSize = 32
    const items: SocialItemType[] = [
        {
            icon: 'whatsapp',
            size: iconSize,
            link: 'https://chat.whatsapp.com/LVHomJzXEmXH0cfJRpC441',
            title: 'Participe to nosso grupo do WhatsApp'
        },
        {
            icon: 'tiktok',
            size: iconSize,
            link: 'https://www.tiktok.com/@descontoporreta',
            title: 'Acesse o nosso tiktok'
        },
        {
            icon: 'instagram',
            size: iconSize,
            link: 'https://www.instagram.com/descontoporreta',
            title: 'Acesse o nosso Instagram'
        },
        {
            icon: 'twitter',
            size: iconSize,
            link: 'https://twitter.com/DescontoPorreta',
            title: 'Acesse o nosso Twitter / X'
        }
    ]
    return {
        data: items,
        message: `Sucesso`,
        status: 'success'
    };
};
