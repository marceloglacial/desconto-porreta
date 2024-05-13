import { SocialItemType, getSocial } from '@/services/social'
import { redirect } from 'next/navigation'

export default async function PageBySlug({ params }: { params: { slug: string } }) {
    const socialData = await getSocial()
    const social: SocialItemType = socialData.data.find(
        (item: SocialItemType) => item.icon === params.slug
    )
    if (social) {
        return redirect(social.link)
    } else return <h1 className='py-8 font-bold text-4xl text-center'>Pagina não encontrada</h1>
}
