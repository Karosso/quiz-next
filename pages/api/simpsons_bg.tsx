import type { NextApiRequest, NextApiResponse } from 'next'
import { bg } from '../../bg';

export default (request: NextApiRequest, response: NextApiResponse) => {
    if (request.method === 'OPTIONS') {
        response.status(200).end();
        return;
    }

    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');

    response.status(200).json(bg)
}