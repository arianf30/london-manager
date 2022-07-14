import BasicButton from "components/buttons/BasicButton"
import SectionNavbar from "components/navbars/SectionNavbar"

const itemsDropdown = [
  {
    icon: "nuevo",
    iconSVG: null,
    text: "Nueva caja",
    action: () => console.log("Nueva caja"),
  },
  {
    icon: "editar",
    iconSVG: null,
    text: "Editar caja",
    action: () => console.log("Editar caja"),
  },
]

export default function Cajas() {
  return (
    <div className="h-screen">
      <SectionNavbar title="cajas" itemsDropdown={itemsDropdown} />
      <div className="flex h-[calc(100%_-_64px)] flex-wrap bg-blanco3 overflow-auto">
        <div className="grid w-full h-auto grid-cols-3 gap-8 py-10 px-8">
          {/* CAJAS */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div
              key={index}
              className="w-full h-[404px] bg-blanco1 shadow-[0_3px_20px_rgb(0,0,0,0.16)] rounded-3xl"
            >
              {/* CABECERA */}
              <div className="flex h-16 items-center bg-blanco3 shadow-[0_3px_4px_-2px_rgb(0,0,0,0.07)] rounded-t-3xl px-5 justify-between">
                <div>
                  <p className="inline font-bold uppercase">Caja {item}</p>
                  <p className="inline font-bold text-xs text-verde">
                    <span className="font-icons i-candado-abierto text-lg ml-3 mr-2" />
                    ABIERTA
                  </p>
                </div>
                <div>
                  <BasicButton
                    text="Editar"
                    icon="editar"
                    action={() => alert("Editando caja")}
                    margin="mr-5"
                  />
                  <BasicButton
                    text="Eliminar"
                    icon="eliminar"
                    action={() => alert("Eliminando caja")}
                  />
                </div>
              </div>

              <div className="p-6">
                {/* TOTAL */}
                <div className="h-16 flex items-center justify-center shadow-[0_6px_20px_rgb(10,157,123,0.3)] rounded-2xl">
                  <h6 className="inline font-bold text-verde mr-2">$</h6>
                  <h2 className="inline font-bold text-verde">12.200,00</h2>
                </div>
                {/* INGRESAR-RETIRAR */}
                <div className="flex justify-between mt-2 mb-4">
                  <BasicButton
                    text="Ingresar efectivo"
                    icon="billete"
                    action={() => alert("Ingresando efectivo")}
                    color="text-gris2"
                    hover="hover:text-negro1"
                  />
                  <BasicButton
                    text="Retirar efectivo"
                    icon="billete"
                    action={() => alert("Retirando efectivo")}
                    color="text-gris2"
                    hover="hover:text-negro1"
                  />
                </div>
                {/* OTROS TOTALES */}
                <div className="flex h-10 text-xs items-center justify-between border-t-[1px] border-gris1">
                  <span>Total de tarjetas:</span>
                  <span>#3.318,00</span>
                </div>
                <div className="flex h-10 text-xs items-center justify-between border-t-[1px] border-gris1">
                  <span>Total de otros métodos:</span>
                  <span>$1.008,00</span>
                </div>

                {/* BOTONES */}
                <div className="flex py-4 w-full justify-between gap-x-2 mt-2">
                  <button className="inline-flex justify-center w-36 h-10 px-4 font-bold items-center border-2 transition border-violeta text-violeta hover:bg-violeta hover:text-blanco1 hover:drop-shadow-md">
                    Resumen
                  </button>
                  <button className="inline-flex justify-center w-full h-10 px-4 font-bold items-center border-2 transition border-negro3 text-blanco1 bg-negro3 hover:bg-rojo hover:border-rojo hover:drop-shadow-md">
                    Cerrar Caja
                  </button>
                </div>

                {/* INFO */}
                <p className="text-xs mt-4">
                  <span className="font-icons i-info-circulo" />{" "}
                  <strong>Apertura:</strong> Arián el 02/06/2022 a las 20:14hs
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
