import { Request, Response } from 'express';

const handler = (req: Request, res: Response) => res.render('address', {
  title: 'This is the Address Page',
  content: 'This is the content of the Address Page'
});

export default handler;
