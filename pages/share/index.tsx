import React, { ChangeEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import Letter from '/public/svgs/letter.svg';
import styled from 'styled-components';
import theme from '@/styles/theme';
import { CATEGORY_OPTIONS_INFO } from '@/shared/constants/share';
import CategoryOptionItem from '@/components/Share/CategoryOptionItem/CategoryOptionItem';
import { useRouter } from 'next/router';
import DialogWarning from '@/components/Dialog/DialogWarning';
import { CommonAppBar, CommonDialog, CommonIconButton, CommonButton } from '@/components/Common';
import useModal from '@/hooks/useDialog';
import { useMemberQuery, usePostByIdQuery } from '@/hooks/apis';
import shareService from '@/service/apis/shareService';
import { CONTENT_SEPARATOR } from '@/shared/constants/question';
import { ellipsis } from '@/styles/mixins';

type SharePageQuery = {
  postId: string;
};

const Share = () => {
  const [receiverName, setReceiverName] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<keyof typeof CATEGORY_OPTIONS_INFO>('UNSELECT');
  const { dialogVisible: isOpenConfirmDialog, toggleDialog: toggleConfirmDialog } = useModal();

  const router = useRouter();
  const { postId } = router.query as SharePageQuery;

  const { data: post, isLoading: isLoadingPost, refetch: refetchPost } = usePostByIdQuery(postId as string);
  const { data: me, isLoading: isLoadingMe } = useMemberQuery();

  const canShare = selectedCategory && receiverName;

  const changeReceiverName = (event: ChangeEvent<HTMLInputElement>) => {
    setReceiverName(event.target.value);
  };

  const changeSelectedCategory = (category: keyof typeof CATEGORY_OPTIONS_INFO) => {
    setSelectedCategory(category);
  };

  const createSharedPostLink = (ldm: string) => {
    const SHARED_POST_PAGE = '/share/post';
    return window.location.origin + SHARED_POST_PAGE + '/' + ldm;
  };

  const getSharedPostLink = async () => {
    try {
      if (!selectedCategory) return alert('선택해주셔요');
      return await shareService.sharePost({ receiverName, category: selectedCategory, postId });
    } catch (error) {
      alert('404');
    }
  };

  const copySharedPostLink = async () => {
    const sharedPostLdm = await getSharedPostLink();

    if (!sharedPostLdm) return alert('404');

    const sharedPostLink = createSharedPostLink(sharedPostLdm);
    router.push(sharedPostLink);
  };

  useEffect(() => {
    if (postId) {
      refetchPost();
    }
  }, [postId]);

  if (isLoadingPost || isLoadingMe) return <div>로딩중</div>;
  if (!post || !me) return <div>404</div>;

  return (
    <Container>
      <CommonAppBar>
        <CommonAppBar.Left>
          <CommonIconButton iconName="close" alt="취소" onClick={toggleConfirmDialog} />
        </CommonAppBar.Left>
      </CommonAppBar>
      <BodyContainer>
        <GuideMessage>
          <IconWrap>
            <Image src={Letter} alt="CheckCirclePr" />
          </IconWrap>
          <Message>{me.nickname}님의 감정을 전해보세요.</Message>
        </GuideMessage>
        <SenderInformation>
          <UserName>To.</UserName>
          <SenderInput value={receiverName} onChange={changeReceiverName} placeholder={'받는이'} />
        </SenderInformation>
        <PostContentContainer>
          {/*<TextArea value={deleteSeparator(post.content)} readOnly={true} height={'8rem'} disabled={true} />*/}
          <Content>{deleteSeparator(post.content)}</Content>
        </PostContentContainer>
        <CategorySelectContainer>
          {Object.keys(CATEGORY_OPTIONS_INFO).map((key, index) => {
            const category = key as keyof typeof CATEGORY_OPTIONS_INFO;

            return (
              <CategoryOptionItem
                key={`category-${index}`}
                category={category}
                isSelect={category === selectedCategory}
                onClick={() => changeSelectedCategory(category)}
              />
            );
          })}
        </CategorySelectContainer>
        <SenderInformation>
          <UserName>From. {me.nickname}</UserName>
        </SenderInformation>
        {
          <ButtonWrapperA>
            <ButtonContainer>
              <CommonButton color="primary" onClick={copySharedPostLink} disabled={canShare ? false : true}>
                <ButtonMessage>다음</ButtonMessage>
              </CommonButton>
            </ButtonContainer>
          </ButtonWrapperA>
        }
        {isOpenConfirmDialog && (
          <CommonDialog type="alert" onClose={toggleConfirmDialog} onConfirm={() => router.back()}>
            <DialogWarning>작성중인 내용을 삭제하시겠어요?</DialogWarning>
          </CommonDialog>
        )}
      </BodyContainer>
    </Container>
  );
};

const deleteSeparator = (content: string) => {
  const MAX_LENGTH = 60;
  const deletedSeparator = content.replaceAll(CONTENT_SEPARATOR, ' ');

  if (content.length > MAX_LENGTH) {
    return deletedSeparator.slice(0, MAX_LENGTH) + '...';
  }

  return deletedSeparator;
};

const ButtonContainer = styled.div`
  position: sticky;
  left: 0;
  bottom: 8rem;
  margin-top: auto;
  width: 100%;
  height: 5.5rem;
  &::after {
    position: absolute;
    bottom: -8rem;
    left: 0;
    width: 100%;
    height: 21.2rem;
    content: '';
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 52.6%);
    z-index: -1;
  }
`;

const Content = styled.p`
  width: 100%;
  padding: 1.6rem 1.8rem 1.8rem 1.8rem;
  display: inline-block;
  text-align: start;
  cursor: text;
  height: 8rem;
  border-radius: 1.6rem;
  background: ${theme.colors.gray2};
  border: none;
  right: 0;
  ${theme.fonts.body}
  color: ${theme.colors.white};
  outline: none;
  resize: none;
  margin-bottom: 1rem;
`;

const ButtonWrapperA = styled.div`
  margin: auto 0 3.6rem;
  position: fixed;
  max-width: 44.4rem;
  width: calc(100% - 3.6rem);
  bottom: 0;
`;

const Container = styled.div`
  padding-bottom: 6rem;
`;

const ButtonMessage = styled.p`
  ${theme.fonts.btn1}
`;
const BodyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
`;

const IconWrap = styled.div`
  display: flex;
  margin-right: 0.8rem;
  width: 1.8rem;
  height: 1.8rem;
`;

const Message = styled.span`
  ${theme.fonts.h6}
  color: ${theme.colors.white};
`;

const GuideMessage = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const SenderInformation = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1.8rem;
`;

const PostContentContainer = styled.div`
  ${ellipsis(2)};
  height: 8rem;
`;

const CategorySelectContainer = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  flex-flow: row nowrap;
  overflow: auto;
  margin-top: 2.4rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UserName = styled.p`
  ${theme.fonts.h3}
  color: ${theme.colors.white};
`;

export const From = styled.p`
  ${theme.fonts.h3}
  color: ${theme.colors.gray6}
`;

const SenderInput = styled.input`
  margin-left: 0.8rem;
  background: ${theme.colors.gray3};
  border: none;
  border-radius: 0;
  background-color: ${theme.colors.black};
  ${theme.fonts.h5}
  color: ${theme.colors.white};
  width: 12rem;
  outline: none;
  border-bottom: 0.1rem solid ${theme.colors.white};

  &:focus {
    border-bottom: 0.1rem solid ${theme.colors.primary};
  }
`;

const ButtonWrapper = styled.div`
  margin: auto 0 8rem;
  position: fixed;
  max-width: 44.4rem;
  width: calc(100% - 3.6rem);
  bottom: 0;
`;

export default Share;
