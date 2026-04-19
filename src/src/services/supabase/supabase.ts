import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabaseFunctionUrl = import.meta.env.VITE_SUPABASE_FUNCTION_URL;
const supabaseFunctionPublishableKey = import.meta.env.VITE_SUPABASE_FUNCTION_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

export const supabaseFunction = createClient(supabaseFunctionUrl, supabaseFunctionPublishableKey);

/** jwtトークン認証付きEdge Function実行 */
export const sendFunction = async (name: string, params: any) => {
  const response = await fetch(supabaseUrl + '/functions/v1/' + name, {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + supabaseAnonKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });
  const data = await response.json();

  return data;
};
