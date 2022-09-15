import { useState, useEffect } from "react"


export const useFetch = (url, method = "GET") => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async (fetchOptions) => {
      setIsPending(true)
      try {
        const res = await fetch(url, { signal: controller.signal })
        const data = await res.json();
        setData(data)
        setError(null)
        setIsPending(false)
      } catch (err) {
        setError(err)
        setIsPending(false)
      }
    }
    fetchData();

    return () => {
      controller.abort()
    }

  }, [url, method])

  return { data, isPending, error, setData }
}