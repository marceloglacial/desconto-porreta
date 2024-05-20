import { FC, ReactNode } from 'react'

export type BadgeVariantType = keyof typeof badgeVariants
export interface BadgeProps {
    children: ReactNode
    variant?: BadgeVariantType
}
const badgeVariants = {
    success: 'bg-green-600',
    danger: 'bg-red-600',
    alert: 'bg-orange-600',
    disabled: 'bg-gey-600',
}
const badgeContainer = 'badge text-[10px] md:text-xs text-white p-1 rounded'

export const Badge: FC<BadgeProps> = ({ children, variant }): JSX.Element => {
    return (
        <span className={`${badgeContainer} ${badgeVariants[variant || 'success']}`}>
            {children}
        </span>
    )
}
