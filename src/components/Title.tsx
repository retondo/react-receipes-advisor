import { useEffect, type PropsWithChildren } from "react"

export function Title({
  children = import.meta.env.VITE_APP_TITLE,
}: PropsWithChildren) {
  useEffect(() => {
    document.title = String(children)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

export default Title
