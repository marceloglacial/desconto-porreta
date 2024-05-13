import ui from '@/ui'
import { FC } from 'react'
import { SocialBar } from '../social-bar/SocialBar'

export const Footer: FC = () => {
    return (
        <div className={ui.layout.footer}>
            <div className='flex justify-center sm:hidden'>
                <SocialBar />
            </div>
            <div className='legal'>
                <p>
                    <strong>AVISO LEGAL:</strong> O Desconto Porreta é um site de publicidade na
                    internet, não é uma loja e não vende produtos ou serviços para seus usuários.
                    Seu uso é GRATUITO, mas antes, você deverá ler e aceitar nossas Política de
                    Privacidade e Termo de Uso. Se não aceitá-las, por favor, não use o Desconto
                    Porreta. As informações sobre as ofertas são capturadas de forma colaborativa
                    com os administradores da página. Todos os preços estão sujeitos à
                    disponibilidade de estoque e duração da oferta. Alterações de preço podem
                    ocorrer a qualquer momento, sem prévio aviso. Em função disso, você concorda que
                    as informações das lojas são as que devem ser validadas para sua decisão de
                    compra, não responsabilizando o Desconto Porreta por eventuais divergências ou
                    problemas com a compra. É importante destacar que nossa monetização ocorre
                    através de acordos comerciais estabelecidos com algumas varejistas. No entanto,
                    essa estrutura não se aplica a todas, visto que não temos acordos com todas as
                    varejistas mencionadas em nossa plataforma. Ao utilizar nossas ferramentas
                    recebemos uma comissão. Essa é a forma como sustentamos nosso serviço,
                    assegurando um serviço útil e confiável para você economizar.
                </p>
            </div>
        </div>
    )
}
