import React from 'react';
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

import "./index.css";

const LTMyListGroup = () => {
  const links = [{
    link: 'https://icmoc.com',
    name: "Encore Shao"
  }, {
    link: 'https://blogicmoc.com',
    name: "Blog"
  }, {
    link: 'https://erp.icmoc.com',
    name: "Free ERP"
  }, {
    link: '/',
    name: "链"
  }, {
    link: 'https://ranbot.online',
    name: "RanBOT"
  }, {
    link: 'https://inked.top',
    name: "Top Inked"
  }, {
    link: 'https://ekohe.com/encore',
    name: "Ekohe - Encore"
  }, {
    link: 'https://ekohe.com/jobs',
    name: "We Are Hiring at Ekohe"
  }, {
    link: 'https://ekohe.com/careers/Web_Dev',
    name: "Ekohe - Ruby on Rails Developer"
  }, {
    link: 'https://ekohe.ai',
    name: "Ekohe AI - AI for the real-world"
  }]

  const listItems = links.map((item) =>
    <MDBListGroupItem href={item['link']} target='_blank'>{item['name']}</MDBListGroupItem>
  );

  return (
    <MDBContainer fluid className='text-center'>
      <MDBListGroup style={{ width: "100%" }} className='list-group'>
        {listItems}
      </MDBListGroup>
    </MDBContainer>
  );
};

export default LTMyListGroup;