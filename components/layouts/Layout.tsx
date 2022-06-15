import Head from 'next/head'
import { FC, ReactElement } from 'react'

import { Navbar } from '../ui'

interface Props {
    children: ReactElement;
    title?: string
}

const origin = (typeof window !== 'undefined') ? window.location.origin : '';

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="author" content="Meliton Tienda Avila" />
                <meta name="description" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />
                <meta property="og:title" content={`Información de ${title}`} />
                <meta property="og:description" content={`Esta es la página de ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>

            <Navbar />

            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
