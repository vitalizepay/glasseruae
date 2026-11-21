import { EnquiryForm } from "@/components/site/EnquiryForm";

export function QuoteForm({ defaultService = "", defaultLocation = "" }: { defaultService?: string | undefined; defaultLocation?: string | undefined }) {
  return <EnquiryForm defaultService={defaultService} defaultLocation={defaultLocation} formType="service" />;
}
