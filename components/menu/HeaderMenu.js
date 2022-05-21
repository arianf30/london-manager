import CircleButton from 'components/buttons/CircleButton'
import Link from 'next/link'

export default function HeaderMenu ({companyName, companyAddress, role, userName, userImage}) {
  return (
    <div className="flex h-28 border-b-2 border-negro3 px-12 pt-4 bg-[rgba(0,0,0,0.1)] select-none">
      <div className="w-1/3 flex items-center text-blanco1">
        
        <Link href='/profile'>
          <a>
            <CircleButton mr={true} icon="flecha-izq" shadow={true} />
          </a>
        </Link>
        <CircleButton mr={true} icon="candado" shadow={true} image="https://londonmanager.com/2021/imagenes/puntos_de_venta/1/18_06_2020-YeiNu-london-logo.png" altImage="Foto de perfil del usuario" />
        <div>
          <h4 className="leading-none mb-1 text-blanco3"><strong>{companyName}</strong></h4>
          <p className="leading-none text-gris2">{companyAddress}</p>
        </div>
        
      </div>
      <div className="w-1/3 flex items-center justify-center">
        
        <input type="text" className="w-72 h-8 border-2 text-sm rounded-2xl border-negro3 px-4 bg-[rgba(20,20,20,0.3)] text-gris2 placeholder-gris3 focus-visible:border-0 appearance-none box-border" placeholder="Buscar sección" />
        
      </div>
      <div className="w-1/3 flex items-center justify-end text-blanco1">
        
        <div className="text-right">
          <h5 className="leading-none mb-1 text-blanco3"><strong>{userName}</strong></h5>
          <p className="leading-none text-gris2">{role}</p>
        </div>
        <CircleButton ml={true} icon="candado" shadow={true} image={userImage} altImage="Foto de perfil del usuario" />

      </div>
    </div>
  )
}