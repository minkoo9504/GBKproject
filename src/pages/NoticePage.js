import React, { useState, useRef, useEffect } from 'react';
import './NoticePage.scss';
import FooterSecond from '../components/layouts/FooterSecond';
import { useParams } from 'react-router-dom';
import List from '../components/layouts/notice/List';
import FAQ from '../components/layouts/notice/FAQ';

const NoticePage = () => {
  const { tab } = useParams();
  useEffect(() => {
    if (!tab) {
      setActiveTab('notice');
    } else if (tab === 'inform') {
      setActiveTab('notice');
    } else if (tab === 'inquiry') {
      setActiveTab('inquiry');
    } else if (tab === 'faq') {
      setActiveTab('faq');
    }
  }, [tab]);

  const [activeTab, setActiveTab] = useState('notice');

  const tabRefs = useRef([]);

  useEffect(() => {
    // 탭의 위치 정보를 가져와서 정사각형의 위치를 업데이트
    const activeTabElement = tabRefs.current[activeTab];
    const square = document.querySelector('.square');
    const left = activeTabElement.offsetLeft;
    square.style.transform = `translateX(${left}px)`;
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'notice':
        return <List />;
      case 'inquiry':
        return (
          <div>
            <div className="qna">
              <ul>
                <li>
                  <p className="first">이름</p>
                  <div>
                    <input
                      type="text"
                      placeholder="이름을 입력해주세요"
                      name="name"
                      id="name"
                    ></input>
                  </div>
                </li>
                <li>
                  <p className="first">휴대폰번호</p>
                  <div>
                    <input
                      type="tel"
                      placeholder="숫자만 입력해주세요"
                      name="phone"
                      id="phone"
                    ></input>
                  </div>
                </li>
                <li>
                  <p className="first">이메일</p>
                  <div>
                    <input
                      type="email"
                      placeholder="예) dpdnjs@naver.com"
                      name="email"
                      id="email"
                    ></input>
                  </div>
                </li>
                <li>
                  <p className="first">내용</p>
                  <div>
                    <textarea
                      name="content"
                      id="content"
                      cols="30"
                      rows="10"
                      placeholder="내용을 입력해주세요"
                    ></textarea>
                  </div>
                </li>
              </ul>
              <div className="cont">
                <h2>개인정보 수집/이용</h2>
                <div className="contTxt">
                  <p>
                    Ο 이용자의 개인정보는 기본적으로 비밀번호 및 암호화된 정보에
                    의해 보호되며, 파일 및 전송 데이터를 암호화하여 중요한
                    데이터는 별도의 보안기능을 통해 보호되고 있습니다.
                    <br />
                    <br />
                    Ο SMUF 2023은 백신프로그램을 이용하여 컴퓨터 바이러스에 의한
                    피해를 방지하기 위한 조치를 취하고 있으며 백신프로그램은
                    주기적으로 업데이트 됩니다.
                    <br />
                    <br />
                    Ο SMUF 2023은 해킹 및 바이러스 등에 의하여 이용자의
                    개인정보가 유출되거나 훼손되는 것을 막기 위해, 외부로부터의
                    침입탐지 및 침입차단 시스템을 두어 24시간 모니터링하며
                    관리하고 있습니다.
                    <br />
                    <br />
                    SMUF 2023은 이용자의 개인정보보호의 중요성을 인식하고 있으며
                    이를 위해 개인정보처리직원을 합리적으로 제한하고 있으며
                    개인정보보호책임자가 처리직원을 대상으로 교육을 실시하여
                    개인정보보호를 위해 최선을 다하고 있습니다. 또한 본 정책에
                    명시된 이행사항 및 관련 직원의 준수여부를 정기적으로
                    점검하여 위반내용이 있는 경우 이를 시정 또는 개선하고 기타
                    필요한 조치를 취하도록 하고 있습니다.
                    <br />
                    <br />
                    제7조 (권익침해 구제방법)
                    <br />
                    <br />
                    이용자는 개인정보침해로 인한 구제를 받기 위하여
                    개인정보분쟁조정위원회, 한국인터넷진흥원
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수
                    있습니다. 이 밖에 기타 개인정보침해의 신고, 상담에 대하여는
                    아래의 기관에 문의하시기 바랍니다.
                    <br />
                    <br />
                    ο 개인정보분쟁조정위원회 : 02-2100-2499 (www.kopico.go.kr) ο
                    개인정보침해신고센터 : (국번없이) 118 (privacy.kisa.or.kr) ο
                    대검찰청 사이버범죄수사단 : 02-3480-3571 (www.spo.go.kr) ο
                    경찰청 사이버안전국 : (국번없이) 182
                    (cyberbureau.police.go.kr)
                    <br />
                    <br />
                    「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
                    정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한
                    요구에 대하여 공공기관의 장이 행한 처분 또는 부작위로 인하여
                    권리 또는 이익의 침해를 받은 자는 행정심판법이 정하는 바에
                    따라 행정심판을 청구할 수 있습니다.
                    <br />
                    <br />
                    ※ 행정심판에 대해 자세한 사항은 중앙행정심판위원회
                    (www.simpan.go.kr) 홈페이지를 참고하시기 바랍니다.
                    <br />
                    <br />
                    제8조 (개인정보 처리 위탁관리)
                    <br />
                    <br />
                    SMUF 2023은 온라인 문의에 대한 해당 개인정보의 처리를
                    타인에게 위탁하지 않습니다.
                    <br />
                    <br />
                    제9조 (고지의무)
                    <br />
                    <br />현 개인정보처리방침은 2023년 7월 31일 제정되었으며,
                    정부 및 SMUF 2023의 정책 변경에 따라 내용의 추가, 삭제 및
                    수정이 있을 시에는 홈페이지를 통해 사전 공지합니다.
                  </p>
                </div>
                <div className="checkWrap">
                  <input className="checkBox" type="checkbox" />
                  <p>개인정보 수집에 동의합니다.</p>
                </div>
              </div>
              <div>
                <div className="submitBtn"></div>
              </div>
            </div>
          </div>
        );
      case 'faq':
        return <FAQ />;
      default:
        return null;
    }
  };

  return (
    <main className="NoticePage">
      <div className="NoticePageHeader">
        <h1>알림마당</h1>
        <p>공지사항 입니다.</p>
      </div>
      <div className="noticeSection">
        <div className="noticeBtn">
          <div>
            <p
              ref={(el) => (tabRefs.current['notice'] = el)} //따라가는 텝 배경
              className={`tab  ${activeTab === 'notice' ? 'active' : ''}`}
              onClick={() => handleTabClick('notice')}
            >
              공지사항
            </p>
            <p
              ref={(el) => (tabRefs.current['inquiry'] = el)}
              className={`tab  ${activeTab === 'inquiry' ? 'active' : ''}`}
              onClick={() => handleTabClick('inquiry')}
            >
              문의하기
            </p>
            <p
              ref={(el) => (tabRefs.current['faq'] = el)}
              className={`tab ${activeTab === 'faq' ? 'active' : ''}`}
              onClick={() => handleTabClick('faq')}
            >
              FAQ
            </p>
            {/* 정사각형 요소 추가 */}
            <div className="square"></div>
          </div>
          {/* <div className="noticeBtnColor"></div> */}
        </div>
        {renderTabContent()}
      </div>
      <FooterSecond />
    </main>
  );
};

export default NoticePage;
