import NextLink from 'next/link'
import Image from 'next/image'
import { Github } from "lucide-react";

export default function Home() {
  return (
    <main
      className="h-screen-ios relative z-20 mx-auto flex h-screen max-w-7xl flex-col justify-between px-4 overflow-x-hidden bg-black">
      <header className="flex h-[80px] items-center justify-between md:h-[100px]">
        <div className="flex items-center gap-3">
          <NextLink href="/">
            <Image
              className="relative invert"
              src="/cloud.svg"
              alt="cantte Logo"
              width={32}
              height={32}
              priority
            />
          </NextLink>

          <span className="font-semibold text-lg text-white">cantte</span>
        </div>
        <nav className="flex items-center gap-3">
          <ul className="flex gap-2">
            <li className="inline-flex items-center justify-center">
              <NextLink href="mailto:contact@cantte.com">
                <span
                  className="text-neutral-400 inline-flex h-8 items-center justify-center rounded-md text-sm hover:text-neutral-300 hover:bg-white/10 outline-none focus:bg-white/10 w-full px-2">
                  Contactar
                </span>
              </NextLink>
            </li>
          </ul>

          <span aria-hidden className="bg-neutral-800 mx-2 hidden h-5 w-px sm:!inline-block"></span>

          <ul className="flex gap-2">
            <li className="inline-flex items-center justify-center">
              <NextLink href="https://github.com/cantte" target="_blank">
                <span
                  className="text-neutral-400 inline-flex h-8 items-center justify-center rounded-md text-sm hover:text-neutral-300 hover:bg-white/10 outline-none focus:bg-white/10 w-full px-2">
                  <Github className="h-5 w-5"/>
                </span>
              </NextLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="relative mx-auto flex max-w-3xl flex-col justify-center">
        <div className="max-w-[725px] text-center">
          <h1
            className="text-[38px] leading-[46px] md:text-[70px] md:leading-[85px] tracking-[-1.024px;] text-slate-12 font-bold !text-white/80 mb-8 relative">
            Pequeña empresa de software
          </h1>
          <div className="sm:px-20">
            <span className="text-[17px] md:text-xl tracking-[-0.16px] text-neutral-400 font-normal">
              Somos una pequeña empresa de software que se dedica a crear aplicaciones web y móviles, con el objetivo de brindar soluciones tecnológicas a nuestros clientes.
            </span>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <NextLink href="mailto:contact@cantte.com">
                <span
                  className="text-base h-11 px-4 rounded-md gap-2 bg-white text-black hover:bg-white/90 focus:ring-2 focus:ring-white/20 focus:outline-none focus:bg-white/90 inline-flex items-center justify-center border font-medium">
                  Contactar
                </span>
          </NextLink>
        </div>
      </div>

      <footer className="flex h-[80px] items-center justify-center text-center flex-col">
        <span className="inline-flex items-center gap-2 text-sm text-neutral-400 font-normal">
          {new Date().getFullYear()} © cantte
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-neutral-400 font-normal">
          Creado con <span className="text-red-500">❤</span> por
          <a href="https://twitter.com/CarlosPavajeau" target="_blank"
             className="text-white hover:text-white/80 transition-colors duration-200">
            Carlos Pavajeau
          </a>
        </span>
      </footer>
    </main>
  )
}
