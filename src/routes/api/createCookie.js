
export async function get(req) {
  const cookie = `__testcookie='${generateRandomId()}'; Path=/; HttpOnly`

  return {
    status: 200,
    headers: {
      'cache-control': 'no-store',
      'set-cookie': cookie,
    },
    body: {},
  };
}

function generateRandomId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

