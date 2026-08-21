-- ============================================================
-- Guestbook stamps for the portfolio console
-- Safe to run in any Supabase project: creates one isolated
-- table and touches nothing else. To remove: drop table public.stamps;
-- ============================================================

create table if not exists public.stamps (
  id         bigint generated always as identity primary key,
  nickname   text        not null,
  message    text,
  approved   boolean     not null default false,
  created_at timestamptz not null default now(),

  constraint stamps_nickname_len check (char_length(nickname) between 1 and 24),
  constraint stamps_message_len  check (message is null or char_length(message) <= 140)
);

-- the site only ever reads approved rows, newest first
create index if not exists stamps_approved_created_idx
  on public.stamps (created_at desc)
  where approved;

alter table public.stamps enable row level security;

-- anyone may READ, but only rows you have approved
drop policy if exists "read approved stamps" on public.stamps;
create policy "read approved stamps"
  on public.stamps for select
  to anon, authenticated
  using (approved);

-- anyone may LEAVE a stamp, but cannot self-approve it
drop policy if exists "insert pending stamps" on public.stamps;
create policy "insert pending stamps"
  on public.stamps for insert
  to anon, authenticated
  with check (approved = false);

-- No update/delete policies exist, so visitors can never modify or remove
-- stamps. Approve them yourself:
--   update public.stamps set approved = true where id = 123;
