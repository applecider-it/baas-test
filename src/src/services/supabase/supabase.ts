import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(supabaseUrl, supabasePublishableKey);

/**
 * Edge関数実行
 */
export const execFunction = async (name: string, params: any) => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  const ret = await supabase.functions.invoke(name, {
    body: params,
  });

  return ret;
};
