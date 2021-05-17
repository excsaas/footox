import Link from 'next/link';

import FooterStyles from './styles';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
    return (
        <FooterStyles.Wrapper>
            <FooterStyles.Container>
                <h2>test@gmail.com</h2>
                <p>+91 9999999999</p>
                <p>KH.No-53/9/1 & 12/2 Firni Road Industrial Area Mundka</p>
                <p>New Delhi-110041</p>
                <FooterStyles.SocialContainer>
                    <a href="">
                        <FiInstagram size={32} color={'#cd486b'} />
                    </a>
                    <a href="">
                        <FaFacebookSquare size={32} color={'#4267B2'} />
                    </a>
                    <a href="">
                        <AiOutlineTwitter size={32} color={'#1DA1F2'} />
                    </a>
                </FooterStyles.SocialContainer>
                <FooterStyles.PolicyContainer>
                    <Link href="/terms-and-conditions">
                        <a>Terms and Conditions</a>
                    </Link>
                    <Link href="/privacy-policy">
                        <a>Privacy and Policy</a>
                    </Link>
                </FooterStyles.PolicyContainer>
            </FooterStyles.Container>
        </FooterStyles.Wrapper>
    );
}

export default Footer;