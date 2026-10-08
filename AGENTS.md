# Project Architecture Rules

- Build blog article metadata through `buildBlogHead` so canonical, social, breadcrumb, and article data stay consistent.
- Keep long-form façade editorial content in a typed browser-safe content module consumed by its dedicated route so visible FAQs and structured data share one source.