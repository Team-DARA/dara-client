import { LinkTo, Logotypo } from "components/atoms";
import { useRouter } from "next/router";
import React from "react";
import HeaderModal from "../HeaderModal";
import Search from "../Search";
import * as S from "./style";

function Header() {
  const router = useRouter();

  return (
    <S.Header>
      <Logotypo />
      <Search />
      <S.Nav>
        <LinkTo href="/complete">
          <S.CategoryButton isCurrent={router.asPath.includes("complete")}>
            완료영상
          </S.CategoryButton>
        </LinkTo>
        <LinkTo href="/commission">
          <S.CategoryButton isCurrent={router.asPath.includes("commission")}>
            의뢰 영상
          </S.CategoryButton>
        </LinkTo>
        <HeaderModal name="김지수" email="earthssu113@naver.com" />
      </S.Nav>
    </S.Header>
  );
}

export default Header;
