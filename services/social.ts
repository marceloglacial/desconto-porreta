import { IconProps } from '@/components'

export type SocialItemType = {
    link: string
    title: string
} & IconProps

export const getSocial = async (): Promise<IPromise> => {
    const items: SocialItemType[] = [
        {
            icon: 'whatsapp',
            link: 'https://chat.whatsapp.com/GIv7R1QG8lqEgrboOxZ71W',
            title: 'Participe to nosso grupo do WhatsApp',
        },
        {
            icon: 'tiktok',
            link: 'https://www.tiktok.com/@descontoporreta',
            title: 'Acesse o nosso tiktok',
        },
        {
            icon: 'instagram',
            link: 'https://www.instagram.com/descontoporreta',
            title: 'Acesse o nosso Instagram',
        },
        {
            icon: 'twitter',
            link: 'https://twitter.com/DescontoPorreta',
            title: 'Acesse o nosso Twitter / X',
        },
        {
            icon: 'email',
            link: 'mailto:contato@descontoporreta.com.br',
            title: 'Entre em contato por e-mail',
        },
    ]
    return {
        data: items,
        message: `Sucesso`,
        status: 'success',
        total: 1,
        page: 1,
        limit: 1,
        totalPages: 1,
    }
}
