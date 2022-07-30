import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, Logo, Content, User } from "./styles";

export function Header() {
    const { asPath, query } = useRouter();

    const hasUser = asPath.startsWith('/dashboard');
    const { user } = query;

    return (
        <Container logged={!!user} >
            <Content logged={!!user} >
                <Logo logged={!!user}>
                    <Link href="/">
                        <div>
                            <Image src="/baralho.png"
                                width={60}
                                height={60}
                                alt="baralho" />
                        </div>
                    </Link>
                    {!hasUser && <h2>ReactCards</h2>}
                </Logo>
                {hasUser &&
                    <User>
                        <strong>{user}</strong>
                        <Link href="/">
                            <a>Sair</a>
                        </Link>
                    </User>
                }
            </Content>
        </Container>
    );
}
