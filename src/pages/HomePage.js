import React, { useEffect } from 'react';
import BookingSection from '../components/layouts/home/BookingSection';
import EventSection from '../components/layouts/home/EventSection';
import GallerySection from '../components/layouts/home/GallerySection';
import GuideSection from '../components/layouts/home/GuideSection';
import NoticeSection from '../components/layouts/home/NoticeSection';
import ProgramSection from '../components/layouts/home/ProgramSection';
import Footer from './../components/layouts/Footer';


const HomePage = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      // 화면 너비가 1024 이상인 경우에만 스크롤 이벤트 처리
      if (window.innerWidth > 1024) {
        // 마우스 휠 이벤트에서 deltaY 값이 양수면 아래로 스크롤, 음수면 위로 스크롤
        const scrollAmount =
          event.deltaY > 0 ? window.innerHeight : -window.innerHeight;

        // 현재 스크롤 위치에서 100vh만큼 이동
        const newPosition = window.scrollY + scrollAmount;
        const targetPosition =
          Math.round(newPosition / window.innerHeight) * window.innerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });

        // 스크롤 이벤트의 기본 동작을 막습니다.
        event.preventDefault();
      }
    };

    // 스크롤 이벤트 리스너 등록
    const homePageElement = document.querySelector('.HomePage');
    if (homePageElement) {
      homePageElement.addEventListener('wheel', handleScroll);
    }

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      if (homePageElement) {
        homePageElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 useEffect가 호출되도록 설정

  return (
    <main className="HomePage">
      <GuideSection></GuideSection>
      <ProgramSection></ProgramSection>
      <GallerySection></GallerySection>
      <BookingSection></BookingSection>
      <NoticeSection></NoticeSection>
      <EventSection></EventSection>
      <Footer />
    </main>
  );
};

export default HomePage;
