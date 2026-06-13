create table if not exists public.portfolio_visitor_events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null check (event_type in ('visit', 'project_click', 'external_click', 'video_open')),
  visitor_id text not null,
  session_id text,
  project_id text,
  label text,
  path text,
  referrer text,
  language text,
  timezone text,
  user_agent text,
  device_type text,
  browser text,
  os text,
  screen_width integer,
  screen_height integer,
  viewport_width integer,
  viewport_height integer,
  country text,
  occurred_at timestamptz not null default now(),
  created_at timestamptz not null default now()
);

alter table public.portfolio_visitor_events enable row level security;

grant usage on schema public to service_role;
grant select, insert on public.portfolio_visitor_events to service_role;

create index if not exists visitor_events_occurred_at_idx
  on public.portfolio_visitor_events (occurred_at desc);

create index if not exists visitor_events_visitor_idx
  on public.portfolio_visitor_events (visitor_id, occurred_at desc);

create index if not exists visitor_events_type_idx
  on public.portfolio_visitor_events (event_type, occurred_at desc);
