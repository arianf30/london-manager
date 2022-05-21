import Link from 'next/link'

const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export default function Admin() {
  return (
    <div className="flex h-screen justify-center overflow-auto bg-[#1b1c23] p-10">
      <div className="inline-block max-w-lg">
        <h3 className="text-verde font-light">¡Hola, Arián! 😊</h3>
        <h2 className="text-blanco1 font-light mt-4">Está en la administración de <strong>London Manager</strong>.</h2>
        <h5 className="text-gris3 font-light mt-8">¿Qué desea?</h5>
        <div className="mt-4 text-violeta font-medium shadow-xl bg-blanco1 rounded-md p-4 text-xl pt-6 pl-6">
          <Link href={`/${ADMIN_LINK}/puntos_de_venta`}>
            <a className="block hover:underline underline-offset-4 mb-2">Ver los puntos de ventas</a>
          </Link>
          <Link href={`/${ADMIN_LINK}/usuarios`}>
            <a className="block hover:underline underline-offset-4 mb-2">Ver los usuarios</a>
          </Link>
          <Link href={`/${ADMIN_LINK}/conexiones`}>
            <a className="block hover:underline underline-offset-4 mb-2">Ver conexiones de usuarios</a>
          </Link>
          <Link href={`/${ADMIN_LINK}/nuevo_punto`}>
            <a className="block hover:underline underline-offset-4 mb-2">Dar de alta un nuevo punto de venta</a>
          </Link>
          <Link href={`/${ADMIN_LINK}/nuevo_usuario`}>
            <a className="block hover:underline underline-offset-4 mb-2">Dar de alto un nuevo usuario</a>
          </Link>
          <a className="block hover:underline underline-offset-4 mb-2" href="https://londonmanager.com/app/">Ir a la App</a>
        </div>

        <Link href="/logout">
          <a className="block text-sm font-normal hover:underline underline-offset-4 text-rojo mt-8">Cerrar sesión</a>
        </Link>
      </div>
    </div>
  )
}

Admin.auth = true
