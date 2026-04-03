export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-text-muted text-xs font-mono">
        <p>&copy; {new Date().getFullYear()} Xiting Zhuang</p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/xiting-zhuang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?user=7DWbsPUAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            Google Scholar
          </a>
          <a
            href="https://www.linkedin.com/in/xiting-zhuang"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-secondary transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-text-muted/50">
          Built with Next.js + TypeScript
        </p>
      </div>
    </footer>
  );
}
