# Project Architecture Rules

- Build blog article metadata through `buildBlogHead` so canonical, social, breadcrumb, and article data stay consistent.
- Keep long-form façade editorial content in a typed browser-safe content module consumed by its dedicated route so visible FAQs and structured data share one source.
- Keep completed partition-order facts and FAQs in a browser-safe content module consumed by the dedicated editorial route so visible content and metadata remain consistent.
- Keep one-off architectural guides in dedicated blog routes using shared Layout, Button and buildBlogHead so existing site navigation and metadata remain consistent.
- Keep glass-door selection copy and FAQs in a browser-safe content module consumed by the dedicated guide and listing so editorial data has one source of truth.
- Keep supplied long-form contractor briefs as generated browser-safe content modules (structured blocks + FAQs) consumed by a dedicated blog route, so visible FAQs and FAQ schema share one source.
- Keep the broad glass-and-aluminium solutions guide in one typed content module shared by its existing article and listing; refresh the established URL rather than adding a competing broad-intent article.
- Keep the homepage background as one optimised looping video, pause it when off-screen or hidden, and use a poster for reduced motion or playback failure so media does not block readable HTML content.
