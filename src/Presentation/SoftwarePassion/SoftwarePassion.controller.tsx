import { Repository } from "../Blog/Repository";
import { BlogController, Props as BlogControllerProps } from '../Blog'
import { NotFound } from "../NotFound/NotFound.controller";
import * as Composer from './SoftwarePassion.composer'

export interface Props {
    path: string;
    blogRepository: Repository
}

const softwarePassionPath = "/software-passion"

export function SoftwarePassionController({ path, blogRepository }: Props) {

    if (path === softwarePassionPath || path === `${softwarePassionPath}/`) {
        return (<Composer.SoftwarePassionComposer/>)
    }

    if (path.startsWith(`${softwarePassionPath}/`)) {
        const blogPath = "/blogs" + path.substring(softwarePassionPath.length)

        const props: BlogControllerProps = {
            location: blogPath,
            repository: blogRepository
        }

        return (<BlogController {...props} />)
    }

    return <NotFound />
}