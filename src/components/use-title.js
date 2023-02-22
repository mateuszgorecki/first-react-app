import { useEffect } from "react"

const useTitle = (pageTitle) => {
  useEffect(() => {
    let title
    if (pageTitle !== '/') {
      title = pageTitle.charAt(1).toUpperCase() + pageTitle.slice(2)

      if (title.indexOf('/') > 0) {
        title =
          title.substring(0, 9) +
          ' - ' +
          title.slice(10).charAt(0).toUpperCase() +
          title.slice(11)
      }
    } else if (pageTitle === '/') {
      title = 'Home'
    }

    document.title = title
  }, [pageTitle])
}

export default useTitle