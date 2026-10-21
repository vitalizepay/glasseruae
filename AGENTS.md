# Project Architecture Rules

- Build blog article metadata through `buildBlogHead` so canonical, social, breadcrumb, and article data stay consistent.
- Keep long-form façade editorial content in a typed browser-safe content module consumed by its dedicated route so visible FAQs and structured data share one source.
- Keep completed partition-order facts and FAQs in a browser-safe content module consumed by the dedicated editorial route so visible content and metadata remain consistent.
- Keep one-off architectural guides in dedicated blog routes using shared Layout, Button and buildBlogHead so existing site navigation and metadata remain consistent.
