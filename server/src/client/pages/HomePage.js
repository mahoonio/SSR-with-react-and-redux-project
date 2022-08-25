import React from 'react';

const Home = () => {
  return (
    <div className="center-align" style={{ marginTop: '200px' }}>
      <h2>WELCOME</h2>
      <p style={{ fontSize: '22px' }}>
        checkout these awsome features around server side rendering. built with
        react,redux,nodejs and express
      </p>
      <p style={{ fontSize: '20px' }}>
        project by mahan mahmoodi - github page : mahoonio
      </p>
      <p style={{ fontSize: '18px' }}>
        the project was developed for learning purposes with inspiration of
        react ssr course of stephen grider. 25/08/2022
      </p>
    </div>
  );
};

export default { component: Home };
