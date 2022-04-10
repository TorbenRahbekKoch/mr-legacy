import { useRouter, MatchRoute } from '../../Infrastructure/Routing'
import * as Style from './Style'
import * as Menu from '../Menu'

export interface Props {
  headerController: () => JSX.Element
  blogController: (location: Location) => JSX.Element
  cvController: () => JSX.Element
}

export function Composer(props: Props) {

  const router = useRouter([
    new MatchRoute("cv", (location) => props.cvController()),
    new MatchRoute("blogs", (location) => props.blogController(location)),
  ],
  )

  router.setDefaultRoute(() => {
    return (props.cvController())
  })

  return (
    <Style.Application>
      { props.headerController() }
      <Menu.Menu />
      {router.execute(window.location)}
    </Style.Application>
  );
}