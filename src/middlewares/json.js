export async function json(req, res) {
  const buffers = [];

  for await (const chunck of req) {
    buffers.push(chunck);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }
}
