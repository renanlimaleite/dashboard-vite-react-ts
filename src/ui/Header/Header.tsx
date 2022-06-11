import { Link } from "react-router-dom";
import * as S from "./styles";

type HeaderProps = {
  author: string;
};

export function Header({ author = "Renan" }: HeaderProps) {
  return (
    <S.Header>
      <S.Content>
        <h1>{author}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">NotFound</Link>
            </li>
          </ul>
        </nav>
      </S.Content>
    </S.Header>
  );
}
