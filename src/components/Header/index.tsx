import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Logo, Content, User } from "./styles";

export function Header() {
    const { asPath } = useRouter();

    const hasUser = asPath.startsWith('/users');

    return (
        <Container>
            <Content hasUser={hasUser}>
                <Link href="/">
                    <Logo>
                        <Image src="/baralho.png" alt="baralho" layout="fill" />
                    </Logo>
                </Link>
                {hasUser &&
                    <User>
                        <strong>Thyago Ribeiro</strong>
                    </User>}
            </Content>
        </Container>
    );
}