import LocalGuides from '../components/LocalGuides';

export default function GuidesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <header style={{ padding: '40px 16px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>Creative Hub Guides</h1>
        <p style={{ color: 'var(--kch-text-sub)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our collection of curated resources and local knowledge bases to navigate Kirkintilloch.
        </p>
      </header>
      <LocalGuides />
    </div>
  );
}
