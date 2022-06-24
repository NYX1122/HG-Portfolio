import fetch from 'node-fetch';

const API_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

exports.handler = async (event, context) => {
  const params = event.queryStringParameters;
  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: 'hg_art',
    user_id: 'user_D9Sj4kQlybYrXXUQ34cjK',
    template_params: params,
    // accessToken: '6f9c184a66472d2ce155176d78cfb48f',
  };
  console.log(data);

  return await fetch(API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(data),
  }).then(
    (result) => {
      console.log(result.status);
      if (result.status === 200) {
        return {
          statusCode: 200,
          body: JSON.stringify(data),
        };
      } else {
        return {
          statusCode: 400,
          body: JSON.stringify(data),
        };
      }
    },
    (error) => {
      console.log(error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    }
  );
};
