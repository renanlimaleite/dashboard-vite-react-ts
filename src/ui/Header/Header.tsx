import { Link } from "react-router-dom";
import * as S from "./styles"

export function Header() {
  return (
    <S.Header>
      <S.Content>
          <h1>R3LL</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/asdfsdaf">NotFound</Link>
            </li>
          </ul>
        </nav>
      </S.Content>
    </S.Header>
  );
}
