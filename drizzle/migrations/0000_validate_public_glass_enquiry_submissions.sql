-- Preserve public quote enquiries, but reject empty or oversized submissions.
ALTER POLICY "Anyone can submit an enquiry"
ON public.glass_enquiries
WITH CHECK (
  char_length(btrim(full_name)) BETWEEN 1 AND 120
  AND char_length(btrim(phone)) BETWEEN 1 AND 40
  AND char_length(full_name) <= 120
  AND char_length(phone) <= 40
  AND (project_location IS NULL OR char_length(project_location) <= 80)
  AND (project_details IS NULL OR char_length(project_details) <= 1700)
);

-- Public callers may supply enquiry fields only; IDs and timestamps use defaults.
REVOKE INSERT ON public.glass_enquiries FROM anon, authenticated;
GRANT INSERT (full_name, phone, project_location, project_details)
ON public.glass_enquiries TO anon, authenticated;
