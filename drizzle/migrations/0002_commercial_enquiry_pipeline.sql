ALTER TABLE public.glass_enquiries
  ADD COLUMN company_name text CHECK (char_length(company_name) <= 160),
  ADD COLUMN email text CHECK (char_length(email) <= 254),
  ADD COLUMN service_needed text CHECK (char_length(service_needed) <= 80),
  ADD COLUMN project_type text CHECK (project_type IN ('Residential','Commercial','Contractor','Consultant','Other')),
  ADD COLUMN project_scope text CHECK (char_length(project_scope) <= 250),
  ADD COLUMN traffic_source text CHECK (char_length(traffic_source) <= 100),
  ADD COLUMN traffic_medium text CHECK (char_length(traffic_medium) <= 100),
  ADD COLUMN campaign text CHECK (char_length(campaign) <= 100),
  ADD COLUMN landing_page text CHECK (char_length(landing_page) <= 200 AND landing_page ~ '^/[a-zA-Z0-9/_-]*$'),
  ADD COLUMN submitted_page text CHECK (char_length(submitted_page) <= 200 AND submitted_page ~ '^/[a-zA-Z0-9/_-]*$'),
  ADD COLUMN status text NOT NULL DEFAULT 'New' CHECK (status IN ('New','Contacted','Qualified','Quotation Sent','Follow-up','Won','Lost')),
  ADD COLUMN follow_up_at timestamptz,
  ADD COLUMN owner_notes text CHECK (char_length(owner_notes) <= 2000);
GRANT INSERT (company_name,email,service_needed,project_type,project_scope,traffic_source,traffic_medium,campaign,landing_page,submitted_page) ON public.glass_enquiries TO anon, authenticated;
CREATE TABLE public.user_roles (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 role text NOT NULL CHECK (role = 'owner'),
 UNIQUE (user_id,role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read their own assigned role" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE FUNCTION public.is_glasser_owner() RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$ SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = auth.uid() AND role = 'owner') $$;
REVOKE ALL ON FUNCTION public.is_glasser_owner() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_glasser_owner() TO authenticated;
GRANT SELECT ON public.glass_enquiries TO authenticated;
GRANT UPDATE (status,follow_up_at,owner_notes) ON public.glass_enquiries TO authenticated;
GRANT ALL ON public.glass_enquiries TO service_role;
CREATE POLICY "Owners can read enquiries" ON public.glass_enquiries FOR SELECT TO authenticated USING (public.is_glasser_owner());
CREATE POLICY "Owners can follow up enquiries" ON public.glass_enquiries FOR UPDATE TO authenticated USING (public.is_glasser_owner()) WITH CHECK (public.is_glasser_owner());
CREATE INDEX glass_enquiries_created_at_idx ON public.glass_enquiries(created_at DESC);
CREATE INDEX glass_enquiries_status_idx ON public.glass_enquiries(status);