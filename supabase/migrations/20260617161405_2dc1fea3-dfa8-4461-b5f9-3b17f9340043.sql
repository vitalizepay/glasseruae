-- Harden glass_enquiries: ensure no anon/authenticated can read, update, or delete enquiries.
REVOKE SELECT, UPDATE, DELETE ON public.glass_enquiries FROM anon, authenticated;
GRANT INSERT ON public.glass_enquiries TO anon, authenticated;
GRANT ALL ON public.glass_enquiries TO service_role;