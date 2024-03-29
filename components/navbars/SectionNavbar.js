import { useRouter } from "next/router"
import Avatar from "components/avatars/Avatar"
import IconButtonCircle from "components/buttons/IconButtonCircle"
import DropdownNavbar from "components/dropdowns/DropdownNavbar"
import ImageZoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import { closeFullscreen, openFullscreen } from "utils/fullscreen"

export default function SectionNavbar({
  title,
  popInfo,
  permissionsSection,
  itemsDropdown,
  addButton,
}) {
  const router = useRouter()
  const { pop } = router.query

  return (
    <header className="relative flex justify-between h-16 px-4 bg-gs700 items-center z-20 select-none">
      <IconButtonCircle
        icon="arrowLeft"
        size="lg"
        theme="dark"
        action={() => router.push(`/pop/${pop}/menu`)}
      />
      <h1 className="text-blanco font-bold capitalize">{title}</h1>

      <div className="flex h-full items-center gap-1">
        {addButton === "fullscreen" && (
          <IconButtonCircle
            icon="fullScreen"
            size="lg"
            theme="dark"
            action={() => {
              if (typeof window !== "undefined") {
                if (window.innerHeight == screen.height) {
                  closeFullscreen()
                } else {
                  openFullscreen()
                }
              }
            }}
          />
        )}
        {itemsDropdown && <DropdownNavbar items={itemsDropdown} />}
        <div className="flex ml-3">
          <ImageZoom overlayBgColorEnd="rgba(0, 0, 0, 0.95)" zoomMargin={40}>
            <Avatar
              type="user"
              avatar={`https://londonmanager.com/2021/${popInfo?.image}`}
              alt={popInfo?.name}
              size="base"
              shadow={true}
            />
          </ImageZoom>
        </div>
      </div>
    </header>
  )
}
