import { notFound } from "next/navigation";
import { articles } from "@/data/resourceData";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

interface ArticlePageProps {
  params: {
    id: string;
  };
}

// Generate static params so they are pre-rendered at build time
export function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id.toString(),
  }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  
  // Find the exact article by id
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    notFound();
  }

  const Icon = article.icon;

  return (
    <main className="min-h-screen bg-dark-bg font-sans pt-[100px] selection:bg-brand-light/20 relative">
      
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-brand/10 blur-[120px] rounded-full pointer-events-none" />

      <article className="max-w-4xl mx-auto px-6 lg:px-8 pt-10 pb-20 relative z-10">
        
        {/* Back Link */}
        <Link 
          href="/resource" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Resources
        </Link>
        
        {/* Article Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span 
              className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border border-brand-light/20 text-brand-light"
              style={{ backgroundColor: `${article.color}15`, borderColor: `${article.color}30`, color: article.color }}
            >
              {article.tag}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-gray-500 font-medium tracking-wide">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm font-medium pt-4 border-t border-white/10 text-gray-400">
             <div className="w-10 h-10 rounded-full bg-brand-light/10 flex items-center justify-center border border-brand-light/20">
               <Icon className="w-5 h-5 text-brand" />
             </div>
             <div className="flex flex-col">
               <span className="text-white">{article.author}</span>
               <span className="text-xs text-gray-500">Published • {article.date}</span>
             </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div 
          className="text-gray-300 text-lg leading-relaxed space-y-6 [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-white [&>h3]:mt-10 [&>h3]:mb-4 [&>p]:mb-6 [&>ul]:list-disc [&>ul]:pl-6 [&>ul>li]:mb-2 [&>a]:text-brand-light hover:[&>a]:underline"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
        
      </article>
    </main>
  );
}
