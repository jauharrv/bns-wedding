import { supabaseClient } from '~service/supabase';

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();
  }

  const response = await supabaseClient
    .from('wedding_comment')
    .select('*', { count: 'exact' })
    .order('created_at', {
      ascending: false,
    });

  if ('body' in response) {
    delete response.body;
  }

  return res.json({ response });
}
