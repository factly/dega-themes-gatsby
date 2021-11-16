import React, { useState, useEffect } from 'react';
import { HiDownload, HiEye } from 'react-icons/hi';
import Layout from '@factly/gatsby-theme-factly/src/components/Layout';
import * as styles from './report.module.css';
import reportCover from '../../../static/reportCover.png';
import GoogleLightbox from '../../components/GoogleLightbox';
const ReportPageV2 = () => {
  const CHAPTERS = [
    { title: '1. Immunisation', pdfLink: '1. Immunisation.pdf' },
    { title: '2. Nutrition', pdfLink: '2. Nutrition.pdf' },
    { title: '3. Menstrual Health', pdfLink: '3. Menstrual Health.pdf' },
    { title: '4. Maternal Health', pdfLink: '4. Maternal Health (w).pdf' },
    { title: '5. Sexual Reproductive Health', pdfLink: '5. Sexual Reproductive Health.pdf' },
    { title: '6. Cancer', pdfLink: '6. Cancer.pdf' },
    { title: '7. COVID-19', pdfLink: '7. COVID-19.pdf' },
    { title: '8. Public Health Concerns', pdfLink: '8. Public Health Concerns.pdf' },
    { title: '9. Mental Health', pdfLink: '9. Mental Health.pdf' },
    { title: '10. Non-Communicable Diseases', pdfLink: '10. Non-Communicable Diseases.pdf' },
  ];
  // const [selectedTab, setSelectedTab] = useState('report');
  const [isVisible, setIsVisible] = useState(true);
  const [id, setId] = useState(0);
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  const listenToScroll = () => {
    let heightToHideFrom = 1000;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      isVisible && setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };
  return (
    <Layout>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.coverContainer}>
            <img src={reportCover} alt="" />
            <div className={styles.coverOptions}>
              <a
                className={styles.downloadButton}
                download="Health Misinformation Report - Factly"
                href="/Health Misinformation Report_Factly.pdf"
              >
                <HiDownload /> Download Report
              </a>
              <button
                className={styles.viewButton}
                onClick={() => {
                  setId(11);
                  openModal();
                }}
              >
                <HiEye /> View Report
              </button>
            </div>
            <div className={styles.coverLinks}>
              <a href="/Foreword & Executive Summary.pdf" target="_blank">
                Foreword and Executive Summary
              </a>
              <a href="/Acronyms.pdf" target="_blank">
                Acronyms
              </a>
              <a href="/References.pdf" target="_blank">
                References
              </a>
            </div>
          </div>
          <div>
            <h1 className={styles.title}>Health Misinformation Report</h1>
            <h3 className={styles.overview}>Overview</h3>
            <p>
              The Health Misinformation Project is a rather unique project that aims to shape public
              knowledge, attitudes, and concerns in the health sector and collate all the
              health-related misinformation in India at one place. The Health Misinformation Report
              has been authored in the hope to become a seed or a starting point for understanding
              and combating health-related misinformation in the Indian context across the 10
              prioritised sectors. These sectors include immunisation, nutrition, maternal health,
              menstrual health, sexual reproductive health, cancer, public health concerns,
              non-communicable diseases, mental health, and COVID-19. The rationale behind
              prioritising these sectors is that they affect the larger sections of the society.
              This report is an outcome of the yearlong work of the Health Fellow at Factly. The aim
              of the report is to provide a fundamental understanding of each of the chapters and
              through secondary research, identify & map the kind of existing misinformation. In
              this regard, we have reached out to stakeholders who are either experts or
              organisations in each of these sectors for their insights- in total we have conducted
              21 in-depth expert interviews and reached out to 64 stakeholders
              (experts/organisations) and spent hundreds of hours throughout last year. The
              secondary research coupled with the interviews of the relevant sectoral experts and
              organisations have been invaluable to triangulate and validate the misinformation
              research for the report.
            </p>

            <p>
              Given that misinformation is a complex, layered entity that affects the psychology of
              people sharing and consuming information, this report will be a reference point for
              future research work to continue to investigate evidence-based data to gain insights
              into especially pressing topics such as medical misinformation in India. We hope that
              this report serves the purpose of the foundational mapping of the health
              misinformation landscape in India. The Health Misinformation Report covers basic
              misinformation (myths and misconceptions) in the 10 prioritised sectors through 10
              distinct chapters. Each chapter has five parts including an introduction/literature
              review, common myths and misconceptions, a case study, excerpts of the interviews done
              with the sectoral experts, and a conclusion. You can access and navigate through any
              of the 10 chapters by clicking <a href="#chapters">here</a>
            </p>
          </div>
        </header>
        <section className={styles.chapterSection} id="chapters">
          <div className={styles.sectionContent}>
            <h3 className={styles.sectionHeader}>Chapters</h3>
            <div className={styles.chaptersContainer}>
              {CHAPTERS.map((chapter, idx) => {
                return (
                  <div key={idx}>
                    <div>
                      <img src={`/Chapter${idx + 1}.png`} alt="" />
                    </div>

                    <div className={styles.chapterCardContent}>
                      <h4>{chapter.title}</h4>
                      <div className={styles.coverOptions}>
                        <a className={styles.downloadButton} href={`/${chapter.pdfLink}`} download>
                          <HiDownload />
                          Download Chapter
                        </a>
                        <button
                          className={styles.viewButton}
                          onClick={() => {
                            setId(idx + 1);
                            openModal();
                          }}
                        >
                          <HiEye />
                          View Chapter
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* <section className={styles.linkSection}>
          <h3>Download Links</h3>
          <div className={styles.downloadTabsContainer}>
            <button
              className={selectedTab === 'report' && styles.selected}
              onClick={() => setSelectedTab('report')}
            >
              Full Report
            </button>
            <button
              className={selectedTab === 'chapters' && styles.selected}
              onClick={() => setSelectedTab('chapters')}
            >
              Chapters
            </button>
            <button
              className={selectedTab === 'resources' && styles.selected}
              onClick={() => setSelectedTab('resources')}
            >
              Resources
            </button>
          </div>
          <div className={styles.tabPanel}>
            {selectedTab === 'report' && <a href="#">Health Misinformation Report</a>}
            {selectedTab === 'chapters' && (
              <>
                <a href="">Chapter 1. Immunisation</a>
                <a href="">Chapter 2. Nutrition</a>
                <a href="">Chapter 3. Menstrual Health </a>
                <a href="">Chapter 4. Maternal Health </a>
                <a href="">Chapter 5. Sexual Reproduction Health</a>
                <a href="">Chapter 6. Cancer </a>
                <a href="">Chapter 7. COVID-19 </a>
                <a href="">Chapter 8. Public Health concerns</a>
                <a href="">Chapter 9. Mental Health</a>
                <a href="">Chapter 10. Non-Communicable Diseases</a>
              </>
            )}
            {selectedTab === 'resources' && <></>}
          </div>
        </section> */}
      </main>
      {isOpen && (
        <div id="gdrive-lightbox">
          <GoogleLightbox id={id} setIsOpen={setIsOpen} isOpen={isOpen} closeModal={closeModal} />
        </div>
      )}

      {/* hide it in mobiles and also when scrolled */}
      {isVisible && <div className={styles.iconScroll}></div>}
    </Layout>
  );
};

export default ReportPageV2;
