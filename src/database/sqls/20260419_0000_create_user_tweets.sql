create table user_tweets (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  content text not null,
  created_at timestamp default now()
);

alter table user_tweets enable row level security;

create policy "Anyone can read user_tweets"
on user_tweets
for select
using (true);

create policy "Authenticated can insert"
on user_tweets
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update own user_tweets"
on user_tweets
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Delete own user_tweets"
on user_tweets
for delete
to authenticated
using (auth.uid() = user_id);
