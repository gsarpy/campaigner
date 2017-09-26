const keys = require('../config/keys');

module.exports = survey => {
  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>We'd Love Your Feedback!</h3>
        <p>
          Please answer the following survey with just
          a single click.
        </p>
        <p>${survey.body}</p>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
        </div>
        <div>
          <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
