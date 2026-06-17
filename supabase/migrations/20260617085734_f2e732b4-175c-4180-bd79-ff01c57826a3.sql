
CREATE TABLE public.glass_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  project_location TEXT,
  project_details TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT INSERT ON public.glass_enquiries TO anon, authenticated;
GRANT ALL ON public.glass_enquiries TO service_role;

ALTER TABLE public.glass_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit an enquiry"
  ON public.glass_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
