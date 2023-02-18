import { supabaseClient } from '~service/supabase';

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { name, message, is_attend = null } = JSON.parse(req.body);

  try {
    const response = await supabaseClient
      .from('wedding_comment')
      .insert({ name, message, is_attend });

    console.log(response);

    if ('body' in response) {
      delete response.body;
    }

    return res.status(response.status).json({ response });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
