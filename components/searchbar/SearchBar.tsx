'use client'
import ui from '@/ui'
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
        <div className={ui.searchbar.container}>
            <form onSubmit={handleSubmit} className='searchbar__form relative'>
                <input
                    type='search'
                    className={ui.searchbar.input}
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
