import Link from 'next/link';
import { useRouter } from 'next/router';

import HeaderStyles from './styles';
import { appRoutes } from '../../utils/routes';

function Header() {
    const router = useRouter();

    return (
        <HeaderStyles.Wrapper>
            <HeaderStyles.Container>
                <HeaderStyles.LogoContainer>
                    <Link href="/">
                        <img src="/images/logo.png" alt="" />
                    </Link>
                </HeaderStyles.LogoContainer>
                <HeaderStyles.NavList>
                    {appRoutes.map((route, index) => {
                        return (
                            <HeaderStyles.NavListItems key={index}>
                                <Link href={route.path}>
                                    <a>{route.title}</a>
                                </Link>
                                {router.pathname === route.path && <HeaderStyles.NavPointer />}
                            </HeaderStyles.NavListItems>
                        );
                    })}
                    <HeaderStyles.NavListItems></HeaderStyles.NavListItems>
                </HeaderStyles.NavList>
            </HeaderStyles.Container>
        </HeaderStyles.Wrapper>
    );
}

export default Header;
