import fetch from 'node-fetch';

const API_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

exports.handler = async (event, context) => {
  const params = context.queryStringParameters;
  const updatedParams = { service_id: process.env.SERVICE_ID, ...params };
  const convertedParams = JSON.stringify(updatedParams);
  // let response;
  // try {
  //   response = await fetch(API_ENDPOINT, {
  //     method: 'POST',
  //     body: convertedParams,
  //   });
  //   console.log(response);
  // } catch (err) {
  //   console.log(err);
  //   return {
  //     statusCode: 400,
  //     body: String(error),
  //   };
  // }

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify({ data: response }),
  // };

  return fetch(API_ENDPOINT, {
    method: 'POST',
    body: convertedParams,
  })
    .then((response) => response.json())
    .then((data) => ({
      statusCode: 200,
      body: data,
    }))
    .catch((error) => ({ statusCode: 400, body: String(error) }));
};
