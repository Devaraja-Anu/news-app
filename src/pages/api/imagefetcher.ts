

export  const imagefetcherimagefetcher = async (req: string, res: any) => {
  const url = decodeURIComponent(req.query.url);
  const result = await fetch(url);
  const body = await result.body;
  body.pipe(res);
};
