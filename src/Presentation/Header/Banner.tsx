import * as Style from './Style'

export function Banner() {
    return (
        <Style.Banner id="banner">
            <Style.BannerPicture>
                <source srcSet="/images/linkedin-banner.png"/>
                <img src="/images/linkedin-banner.png"/>
            </Style.BannerPicture>
            <Style.MugShot>
            <source srcSet="/images/linkedin-profile-picture.png" media="(min-width: 1000px)" />
            <source srcSet="/images/linkedin-profile-picture-small.png" media="(min-width: 450px)" />
                <img src="/images/linkedin-profile-picture-xsmall.png" alt="Mr. Legacy" />
            </Style.MugShot>
            <Style.PrintImage>
                <img src="/images/printshot.png" alt="Mr. Legacy" />
            </Style.PrintImage>
        </Style.Banner>
    )
}