export default function setArticleImage(image, size) {
  if (image) {
    return {
      image: `url('https://londonmanager.com/2021/${image}')`,
      size: size,
    }
  }
  return {
    image: "url('https://londonmanager.com/2021/imagenes/arbol/no-pic.png')",
    size: "cover",
  }
}
