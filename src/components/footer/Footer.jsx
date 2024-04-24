import styles from './Footer.module.css'

import FacebookIcon from '../../assets/images/icon-facebook.svg?react'
import InstagramIcon from '../../assets/images/icon-instagram.svg?react'
import PinterestIcon from '../../assets/images/icon-pinterest.svg?react'

import Link from '../social-media-link/Link.jsx'

const iconInformation = [
    {
        icon: FacebookIcon,
        url: 'https://www.facebook.com/'
    },
    {
        icon: InstagramIcon,
        url: 'https://www.instagram.com/'
    },
    {
        icon: PinterestIcon,
        url: 'https://www.pinterest.com/'
    }
]

export default function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.linkContainer}>
                {iconInformation.map((iconInfo, index) => <Link key={index} Icon={iconInfo.icon} url={iconInfo.url} />)}
            </div>
        </footer>
    )
}