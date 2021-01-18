import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import '../static/css/main.scss';

const HomePageTwo = ({ data }) => {
  const { dega } = data;

  const {
    categories: { nodes },
  } = dega;
  const categories = nodes.map((item) => {
    return { meta_fields: item.meta_fields, slug: item.slug, name: item.name };
  });

  const filteredCategories = categories
    .filter((i) => i.meta_fields !== null && i.meta_fields.stats)
    .sort((a, b) => a.meta_fields.order - b.meta_fields.order);
  return (
    <Layout>
      <div className="row">
        {filteredCategories.map((item, i) => {
          return (
            item.meta_fields && (
              <div className="card" key={i}>
                <div
                  key={i}
                  className="card-content"
                  style={{
                    backgroundImage: `url(${item.meta_fields.bg})`,
                  }}
                >
                  <div className="card-body" style={{ backgroundColor: item.meta_fields.color }}>
                    {/* <span className="card-count">{i + 1}</span> */}
                    {/* {item.meta_fields.stats.map((i, idx) => (
                  <React.Fragment key={idx}>
                    <h3 className="card-goal">{i.value}</h3>
                    <p className="card-desc">{i.content}</p>
                  </React.Fragment>
                ))} */}
                    <h3>{item.name}</h3>
                    <div className="info">
                      {item.meta_fields.stats.map((i, idx) => (
                        <div key={idx}>
                          <span>{i.value}</span>
                          <p>{i.content}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/categories/${item.slug}`} type="button">
                      More info
                    </Link>
                  </div>
                  <img src={item.meta_fields.icon} alt="" />
                </div>
              </div>
            )
          );
        })}
        {/* <div className="card">
          <div
            className="card-content"
            style={{
              backgroundColor: '#fff',
              boxShadow: ' inset 0px 0px 10px 1px rgba(0,0,0,0.09)',
            }}
          >
            <div
              className="card-body"
              style={{ opacity: 1, display: 'flex', alignItems: 'center' }}
            >
              <Link href="/categories" id="view-more" type="button">
                View All
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </Layout>
  );
};

export default HomePageTwo;

export const query = graphql`
  query($sid: [Int!]) {
    dega {
      categories(spaces: $sid) {
        nodes {
          slug
          name
          description
          meta_fields
        }
      }
    }
  }
`;
