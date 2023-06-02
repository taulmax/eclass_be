const GET = async (url: string) => {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
};

const POST = async (url: string, data: any) => {
  fetch(url, {
    method: "POST", // 또는 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const useMyFetch = { GET, POST };
