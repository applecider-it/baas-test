import { createClient } from 'npm:@supabase/supabase-js@2';

/** 認証を反映したsupabaseオブジェクト */
export function getSupabaseWithAuth(req) {
  const authHeader = req.headers.get('Authorization');

  console.log({ authHeader });

  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    {
      global: {
        headers: {
          Authorization: authHeader ?? '',
        },
      },
    },
  );

  return supabase;
}

/** 認証を反映しないsupabaseオブジェクト */
export function getSupabaseNoAuth(req) {
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
  );

  return supabase;
}
