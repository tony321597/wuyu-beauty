import profileImgLarge from '~/assets/517-1.jpeg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/517-1.jpeg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      我們位於基隆市，擁有迷人港灣風光，豐富海鮮美食與傳統廟口文化，依山傍海環境優美，是北台灣重要海港城市。這是我們的變美小基地～輕鬆一趟喚醒最好自己。{' '}
      <Link href="https://maps.app.goo.gl/PS7GLVSnaERcYYwu7?g_st=ipc">點我看地圖</Link><br/> <br/>
                  個人經歷：<br/>
                  國家乙級美容證照<br/>
                  國家丙級美容證照<br/>
                  二級紋繡師證照<br/>
                  2024中華奧林匹克盃紋繡評審<br/>
                  🏆2024中華奧林匹克時尚唇模塊-冠軍<br/>
                  🏆2024TINA半永久靜態眼線-季軍<br/>
                  🏆2023TSIA國際靜態紋繡霧眉-冠軍<br/>
                  🏆2023亞太盃靜態霧眉-季軍<br/>  <Link href="https://www.facebook.com/wuyoubeauty?locale=zh_TW">臉書facebook</Link>
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      如果想更深了解美學相關知識請點我{' '}
      <Link href="/projects/volkihar-knight">美學常識</Link><br/> 預約請跟我聯繫
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
