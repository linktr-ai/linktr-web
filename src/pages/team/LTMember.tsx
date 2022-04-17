import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import Vultr from '../vultr'

const LTMember = () => {
  const members = [
    {
      'name': 'Designer',
      'title': 'UI/UX设计师',
      'desc': '她们热爱生活，喜欢记录下生活的美好事物，并用艺术的方式展现出来。她们擅长于UX/UI方面，对于用户行为调研和设计有自己独特的见解。',
      'links': [
        {
          'name': 'facebook',
          'url': 'https://facebook.com/encore.shao'
        },
        {
          'name': 'twitter',
          'url': 'https://twitter.com/encoreshao'
        },
        {
          'name': 'github',
          'url': 'https://github.com/encoreshao'
        }
      ]
    },
    {
      'name': 'Data',
      'title': 'AI/ML工程师',
      'desc': '善于发现数据之美，并将其与模型完美结合，定制出来适合客户预期的商业模型，从而帮助终端用户。模型训练的方式有机器学习，深度学习，神经网络，自然语言，决策树，等等。',
      'links': [
        {
          'name': 'facebook',
          'url': 'https://facebook.com/encore.shao'
        },
        {
          'name': 'twitter',
          'url': 'https://twitter.com/encoreshao'
        },
        {
          'name': 'github',
          'url': 'https://github.com/encoreshao'
        },
        {
          'name': 'linkedin',
          'url': 'https://linkedin.com/in/encoreshao'
        },
        {
          'name': 'instagram',
          'url': 'https://instagram.com/encoreshao'
        }
      ]
    },
    {
      'name': 'Application',
      'title': '全栈工程师',
      'desc': '拥有10多年开发经验的全栈工程师，擅长于Web，Mobile程序的开发，UX调研，数据爬虫，服务器搭建和部署方面。',
      'links': [
        {
          'name': 'instagram',
          'url': 'https://facebook.com/encore.shao'
        },
        {
          'name': 'twitter',
          'url': 'https://twitter.com/encoreshao'
        },
        {
          'name': 'github',
          'url': 'https://github.com/encoreshao'
        }
      ]
    }
  ]

  return (
    <>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5 black-text">
            我们的团队
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            数字原住民，全球思想家。 我们不仅仅是一群才华横溢的技术和设计爱好者，
          </p>

          <MDBRow>
            {members.map(
              (item: any, index: number) => (
                <MDBCol md="4" className="mb-lg-0 mb-5">
                  <div>
                    <img
                      src="https://icon-library.com/images/icon-programmer/icon-programmer-14.jpg"
                      className="rounded-circle z-depth-1 img-fluid"
                      alt="Encore Shao"
                    />
                  </div>
                  <h5 className="font-weight-bold mt-4 mb-3 black-text">{item['name']}</h5>
                  <p className="text-uppercase blue-text">{item['title']}</p>
                  <p className="grey-text">
                    {item['desc']}
                  </p>
                  <ul className="list-unstyled mb-0">
                    { item['links'].map(
                      (link: any, index: number) => (
                        <a href={link['link']} className="p-2 fa-lg">
                          <MDBIcon fab icon={`${link['name']}`} className="blue-text" />
                        </a>
                      )
                    )}
                  </ul>
                </MDBCol>
              )
            )}
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      <Vultr />
    </>
  );
}

export default LTMember;