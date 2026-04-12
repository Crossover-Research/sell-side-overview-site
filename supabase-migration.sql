-- Run this in Supabase SQL Editor:
-- https://supabase.com/dashboard/project/yvkbfmdugujhxerdopcm/sql

create table if not exists catalyst_requests (
  id            uuid primary key default gen_random_uuid(),
  first_name    text not null,
  last_name     text not null,
  email         text not null,
  firm          text not null,
  org_type      text,
  mandate       text,
  submitted_at  timestamptz not null default now(),
  status        text not null default 'new'  -- new | reviewed | contacted | closed
);

-- Index for quick email lookup / dedup
create index if not exists catalyst_requests_email_idx on catalyst_requests (email);
create index if not exists catalyst_requests_status_idx on catalyst_requests (status);
create index if not exists catalyst_requests_submitted_idx on catalyst_requests (submitted_at desc);

-- Row-level security: anon can insert (form submissions), service role can read
alter table catalyst_requests enable row level security;

create policy "Allow anon inserts"
  on catalyst_requests for insert
  to anon
  with check (true);

create policy "Allow service role full access"
  on catalyst_requests for all
  to service_role
  using (true);

-- View for Ian: latest requests first
create or replace view catalyst_leads as
  select
    id,
    first_name || ' ' || last_name as full_name,
    email,
    firm,
    org_type,
    mandate,
    status,
    submitted_at
  from catalyst_requests
  order by submitted_at desc;
