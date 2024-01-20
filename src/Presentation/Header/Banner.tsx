import * as Style from './Style'

export function Banner() {
    return (
        <Style.Banner id="banner">
            <Style.BannerPicture>
                <source srcSet="/images/linkedin-banner.png"/>
                <img src="/images/linkedin-banner.png"/>
            </Style.BannerPicture>
            <Style.MugShot>
                <source srcSet="/images/mugshot.jpg" media="(min-width: 1000px)" />
                <img src="/images/mugshot-small.jpg" alt="Mr. Legacy" />
            </Style.MugShot>
            <Style.PrintImage>
                <img src="/images/printshot.png" alt="Mr. Legacy" />
            </Style.PrintImage>
        </Style.Banner>
    )
}