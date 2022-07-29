import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Logo, Content, User } from "./styles";

export function Header() {
    const { asPath, query } = useRouter();

    const hasUser = asPath.startsWith('/dashboard');
    const { user } = query;

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
                        <strong>{user}</strong>
                    </User>}
            </Content>
        </Container>
    );
}
