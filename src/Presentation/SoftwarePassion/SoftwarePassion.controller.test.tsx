import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Props, SoftwarePassionController } from './SoftwarePassion.controller'
import { Props as TitleProps } from '../Blog/Articles/Title'

const retrieveBlogEntries = (retrieved:(entries: TitleProps[]) => void) => {      
    retrieved([
    { url: "/blogs/article", title: "Article", teaser: "", dir: "", date: undefined, categories: []}
  ])}

const articleText = "Article without much text"

function retrieveArticle(_url: string, articleReceived: (text: string) => void) {
    articleReceived(articleText)
}

describe('SoftwarePassion', () => {

    it('should show Software Passion page', () => {

        const path = '/software-passion'
        const repository = {
            getAllBlogEntries: retrieveBlogEntries,
            getArticle: retrieveArticle
        }

        const props: Props = {
            path: path,
            blogRepository: repository
        }

        render(<SoftwarePassionController {...props} />)
        expect(screen.getByAltText("Software Passion Logo"))
            .toBeDefined()
    })

    it('shows corresponding article', async () => {

        const path = '/software-passion/article'
        const repository = {
            getAllBlogEntries: retrieveBlogEntries,
            getArticle: retrieveArticle
        }

        const props: Props = {
            path: path,
            blogRepository: repository
        }

        await render(<SoftwarePassionController {...props} />)

        expect(await screen.getByText(articleText)).toBeInTheDocument()        
    })
})

