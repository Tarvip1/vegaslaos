exports.handler = async () => {
  const urls = [
    "https://legend147-bamboora.store",
    "https://legend147-Lilyvia.store",
  ];

  return {
    statusCode: 200,
    body: JSON.stringify({ urls }),
  };
};
