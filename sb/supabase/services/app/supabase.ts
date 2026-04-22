import { createClient } from 'npm:@supabase/supabase-js@2';

/** 認証を反映したsupabaseオブジェクト */
export function getSupabase(req) {
  const supabaseUrl = Deno.env.get('APP_SUPABASE_URL')!;
  const supabasePublishableKey = Deno.env.get('APP_SUPABASE_PUBLISHABLE_KEY')!;
  const supabaseSecretKey = Deno.env.get('APP_SUPABASE_SECRET_KEY')!;

  console.log({ supabaseUrl, supabasePublishableKey, supabaseSecretKey });

  const authHeader = req.headers.get('Authorization');

  console.log({ authHeader });

  const supabase = createClient(supabaseUrl, supabaseSecretKey, {
    global: {
      headers: {
        Authorization: authHeader ?? '',
      },
    },
  });

  return supabase;
}

/** 認証を反映しないsupabaseオブジェクト */
export function getSupabaseNoAuth(req) {
  const supabaseUrl = Deno.env.get('APP_SUPABASE_URL')!;
  const supabasePublishableKey = Deno.env.get('APP_SUPABASE_PUBLISHABLE_KEY')!;
  const supabaseSecretKey = Deno.env.get('APP_SUPABASE_SECRET_KEY')!;

  console.log({ supabaseUrl, supabasePublishableKey, supabaseSecretKey });

  const authHeader = req.headers.get('Authorization');

  console.log({ authHeader });

  const supabase = createClient(supabaseUrl, supabaseSecretKey);

  return supabase;
}
