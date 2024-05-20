'use client'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Icon } from '@/components'
import { useRouter } from 'next/navigation'

export const SearchBar: FC = (): JSX.Element => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!searchTerm) return alert('Favor digitar algo no campo de busca')
        router.push(`/busca?search=${searchTerm}`)
    }
    return (
        <div className='searchbar w-full absolute sm:static -bottom-16 left-0 bg-brand-background max-[400px]:px-4 px-6 py-4'>
            <form onSubmit={handleSubmit} className='searchbar__form relative'>
                <input
                    type='search'
                    className='searchbar__input border border-slate-300 shadow-sm rounded-xl py-2 px-4 pl-10 relative placeholder-black bg-white w-full'
                    placeholder='buscar produto'
                    onChange={handleChange}
                />
                <button className='searchbar__buttuon absolute left-3 h-full'>
                    <Icon size={5} icon={'search'} />
                    <span className=' sr-only'>Buscar</span>
                </button>
            </form>
        </div>
    )
}
