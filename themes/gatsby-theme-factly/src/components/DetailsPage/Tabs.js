/** @jsx jsx */
import React, { useState } from 'react';
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';

const Tabs = ({ baseUrl = '/', data = [], tabsData = [] }) => {
  const [activeTab, setActiveTab] = useState('');
  const onClickTabItem = (slug) => {
    setActiveTab(slug);
  };

  return (
    <>
      <ul className="tab-list" sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <li>
          <a href="#" onClick={() => onClickTabItem(0)}>
            All
          </a>
        </li>
        {tabsData.map((tab) => (
          <Tab
            key={tab.name}
            activeTab={activeTab}
            label={tab.name}
            onClick={() => onClickTabItem}
          />
        ))}
      </ul>
      <div className="tab-content">
        {activeTab === 0 ? console.log('posts', data) : ''}
        {tabsData.map((tabData, i) => {
          if (i === activeTab) {
            console.log(`${tabData.name}`, tabData.posts);
          }
        })}
      </div>
    </>
  );
};
const Tab = ({ activeTab, label, onClick }) => (
  <li>
    <a onClick={() => onClick(activeTab)} href="#">
      {label}
    </a>
  </li>
);

export default Tabs;
