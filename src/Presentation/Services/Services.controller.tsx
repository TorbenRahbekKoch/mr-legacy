import { useEffect, useState } from 'react'
import ReactMarkDown from 'react-markdown'
import { Repository } from './Repository'
import * as Style from './Style'

export interface Props {
  repository : Repository
}

export function ServicesController(props: Props) {
  const [services, setServices] = useState("")

  useEffect(() => {
    props.repository
      .getServices(services => {
        setServices(services)
      })
  }, [props.repository])

  return (
    <Style.Services>
      <ReactMarkDown>{services}</ReactMarkDown>
    </Style.Services>
  )
}