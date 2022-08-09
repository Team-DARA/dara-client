import styled from "@emotion/styled";
import { RequestActions, RequestForm } from "components/templates/Request";
import React, { useCallback, useRef, useState } from "react";

const categories = ["1", "2", "3", "4"];

function VideoRequestPage() {
  const inputLength = useRef<number>(1);
  const [form, setForm] = useState<any[]>([
    { id: 0, value: "", category: "cate" },
  ]);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const changed = [...form];
      changed[+name].value = value;
      setForm(changed);
    },
    [form]
  );
  const onCategory = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
      const { value } = e.currentTarget;
      const changed = [...form];
      changed[id].category = value;
      setForm(changed);
    },
    [form]
  );
  const onSubmit = useCallback(() => {}, []);
  const onAdd = useCallback(() => {
    const newInput = { id: inputLength.current, value: "", category: "cate" };
    inputLength.current += 1;
    setForm([...form, newInput]);
  }, [form]);

  return (
    <Container>
      <Title>자막 신청하기</Title>
      <RequestForm
        form={form}
        onChange={onChange}
        categories={categories}
        onCategory={onCategory}
      />
      <StickyWrapper>
        <RequestActions onSubmit={onSubmit} onAdd={onAdd} />
      </StickyWrapper>
    </Container>
  );
}

export default VideoRequestPage;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  max-width: 1600px;
  min-height: 80vh;
  margin: auto;
`;
const Title = styled.h1`
  font-size: 2.25rem;
`;
const StickyWrapper = styled.div`
  position: sticky;
  bottom: 4rem;
  padding-top: 6rem;
`;