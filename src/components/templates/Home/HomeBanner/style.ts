import styled from "@emotion/styled";

export const HomeBannerBlock = styled.div`
  width: 100%;
  height: 17rem;
  background-color: #fff6a3;
  margin-bottom: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
`;

export const BannerText = styled.div`
  font-family: "Gmarket-Sans";
  font-weight: 700;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const BannerLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerButtonSection = styled.div`
  width: 18rem;
  display: flex;
  justify-content: space-between;
`;

export const BannerButton = styled.button`
  width: 7rem;
  height: 3rem;
  background-color: #ffffff;
  border-radius: 3rem;
  border: 0.5px solid #b3b3b3;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    background-color: #6fa9ff;
  }
`;
