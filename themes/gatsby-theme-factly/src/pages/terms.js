import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import Footer from '../components/footer';
import ListItems from '../components/listItems';

const menuItems = [
  {
    title: 'Terms Section 1',
    slug: '#terms-section-1'
  },
  {
    title: 'Terms Section 2',
    slug: '#terms-section-2'
  },
  {
    title: 'Terms Section 3',
    slug: '#terms-section-3'
  },
  {
    title: 'Terms Section 4',
    slug: '#terms-section-4'
  }
];

const Terms = ({ data }) => {
  const [postActiveIndex, setPostActiveIndex] = useState('background');

  const createObserver = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (entry.intersectionRatio > 0) {
          setPostActiveIndex(`#${id}`);
        }
      });
    });

    document.querySelectorAll('section[id]').forEach(section => {
      observer.observe(section);
    });
  };
  useEffect(() => {
    createObserver();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="my-24 p-6">
        <h1 className="font-bold text-5xl leading-tight text-center">
          Terms And Conditions
        </h1>
      </div>
      <div className="flex flex-row justify-between p-6 mt-12 md:mt-0">
        <div className="sidebar md:flex md:w-1/4 border-r sticky">
          <div className="block">
            {menuItems.map((item, index) => (
              <ListItems
                hashRoute
                item={item}
                index={index}
                image={false}
                author={false}
                postActiveIndex={postActiveIndex}
                className="py-2 px-6 border-gray-200"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full md:w-3/4 p-2 md:p-6">
          <section id="terms-section-1">
            <div className="mb-4 pb-4 border-b">
              <h5 className="heading">About</h5>
            </div>
            <div className="my-6 pb-6 text-gray-800 p-4">
              In 2005, India legislated one of the best ‘Right to Information’
              laws in the world which changed the public information landscape
              and accessibility in the country. It was the first step towards
              transparency and accountability of governance. In 2012, India came
              up with the National Data Sharing and Accessibility Policy
              (NDSAP), popularly known as the ‘Open Data policy’ of the
              Government of India. In Spite of these systems in place, data and
              information remain in complex and overwhelming formats in the
              country. Some of the data that is meant for the public does not
              even exist in the public domain. Factly was born to create
              supporting platforms and infrastructure to bridge this gap and
              strengthen democracy through engagement.
            </div>
          </section>
          <section id="terms-section-2">
            <div className="mb-4 pb-4 border-b">
              <h5 className="heading">Mission</h5>
            </div>
            <div className="my-6 pb-6 text-gray-800 p-4">
              In 2005, India legislated one of the best ‘Right to Information’
              laws in the world which changed the public information landscape
              and accessibility in the country. It was the first step towards
              transparency and accountability of governance. In 2012, India came
              up with the National Data Sharing and Accessibility Policy (NDSAP)
            </div>
          </section>
          <section id="terms-section-3">
            <div className="mb-4 pb-4 border-b">
              <h5 className="heading">What We Do</h5>
            </div>
            <div className="my-6 pb-6 text-gray-800 flex flex-wrap">
              <div className="flex flex-col flex-auto p-4">
                <h2 className="font-bold text-xl mb-2">
                  Data Journalism/Fact Check
                </h2>
                <p>
                  Factly’s written and visual stories lay out facts with
                  evidence and help separate the wheat from the chaff in times
                  of hyper connectivity and constant information bombardment.
                  The content aims to simplify public data & information that
                  might otherwise be in complex forms.
                </p>
              </div>
              <div className="flex flex-col p-4">
                <h2 className="font-bold text-xl mb-2">Information Tools</h2>
                <p>
                  Creating and developing tools that will increase access to
                  public data and information by making it easy, interactive and
                  intuitive. Counting India is Factly’s first tool in its beta
                  version that focuses on accessibility and data visualization
                  of Census-2011 data. Factly is currently working on other
                  tools that are in the development stage.
                </p>
              </div>
              <div className="flex flex-col p-4">
                <h2 className="font-bold text-xl mb-2">Advocating Open Data</h2>
                <p>
                  Factly believes that for better public engagement with
                  government data, the supply side also has to be strengthened.
                  Factly actively advocates ‘Open Data’ policy to governments
                  and agencies that house large amounts of public information.
                  Factly collaborates and provides services to governments and
                  institutions to release data to the public domain. Besides
                  these, Factly engages with various stakeholders from across
                  the ‘Open Data’ spectrum to build successful case studies &
                  use cases. Factly also conducts training sessions on
                  accessing, understanding & analysing public data to
                  journalists, public policy enthusiasts, NGOs etc.
                </p>
              </div>
            </div>
          </section>
          <section id="terms-section-4">
            <div className="mb-4 pb-4 border-b">
              <h5 className="heading">What We Do</h5>
            </div>
            <div className="my-6 pb-6 text-gray-800 flex flex-wrap">
              <div className="flex flex-col flex-auto p-4">
                <h2 className="font-bold text-xl mb-2">
                  Data Journalism/Fact Check
                </h2>
                <p>
                  Factly’s written and visual stories lay out facts with
                  evidence and help separate the wheat from the chaff in times
                  of hyper connectivity and constant information bombardment.
                  The content aims to simplify public data & information that
                  might otherwise be in complex forms.
                </p>
              </div>
              <div className="flex flex-col p-4">
                <h2 className="font-bold text-xl mb-2">Information Tools</h2>
                <p>
                  Creating and developing tools that will increase access to
                  public data and information by making it easy, interactive and
                  intuitive. Counting India is Factly’s first tool in its beta
                  version that focuses on accessibility and data visualization
                  of Census-2011 data. Factly is currently working on other
                  tools that are in the development stage.
                </p>
              </div>
              <div className="flex flex-col p-4">
                <h2 className="font-bold text-xl mb-2">Advocating Open Data</h2>
                <p>
                  Factly believes that for better public engagement with
                  government data, the supply side also has to be strengthened.
                  Factly actively advocates ‘Open Data’ policy to governments
                  and agencies that house large amounts of public information.
                  Factly collaborates and provides services to governments and
                  institutions to release data to the public domain. Besides
                  these, Factly engages with various stakeholders from across
                  the ‘Open Data’ spectrum to build successful case studies &
                  use cases. Factly also conducts training sessions on
                  accessing, understanding & analysing public data to
                  journalists, public policy enthusiasts, NGOs etc.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer full></Footer>
    </Layout>
  );
};

Terms.propTypes = {
  data: PropTypes.shape({
    file: {
      childImageSharp: {}
    }
  })
};
export default Terms;
