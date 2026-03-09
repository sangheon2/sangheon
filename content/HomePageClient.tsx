import ResearchHighlights from './ResearchHighlights';

export default function HomePageClient() {
  const highlights = [
    {
      id: 1,
      title: 'A 3D Printable Tissue Adhesive',
      image: '/highlights/highlight1.jpg',
      summary:
        'Tissue adhesives are promising alternative to sutures and staples...',
      paper_title: 'A 3D Printable Tissue Adhesive',
      journal: 'Nature Communications',
      volume: '15',
      pages: '1215',
      year: '2024',
      link: 'https://doi.org/...',
    },
    {
      id: 2,
      title: 'Wearable Biosensor Platform',
      image: '/highlights/highlight2.jpg',
      summary:
        'We developed a wearable electrochemical sensing platform...',
      paper_title: 'Wearable Biosensor Platform',
      journal: 'Advanced Materials',
      year: '2025',
      link: 'https://doi.org/...',
    },
  ];

  return (
    <main className="max-w-[1200px] mx-auto px-8">
      <ResearchHighlights items={highlights} />

      <section className="pt-12">
        <h2 className="text-3xl mb-4">News & Updates</h2>
        <p className="text-neutral-600">Latest updates will go here.</p>
      </section>

      <section className="pt-12 pb-20">
        <h2 className="text-3xl mb-4">Selected Publications</h2>
        <p className="text-neutral-600">Selected papers will go here.</p>
      </section>
    </main>
  );
}
