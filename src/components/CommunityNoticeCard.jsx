import './CommunityNoticeCard.css';

export default function CommunityNoticeCard({ title, content, trustLevel, lastVerifiedAt, category }) {
  return (
    <article className="community-notice-card radar-card">
      <div className="notice-header">
        <span className="notice-category">{category || 'General'}</span>
        <span className="notice-meta">{lastVerifiedAt || 'Pending Verification'}</span>
      </div>
      
      <h3 className="notice-title">{title}</h3>
      
      <div className="notice-content">
        {content}
      </div>
      
      <div className="notice-footer">
        <span className="notice-trust-badge">
          Trust Level: {trustLevel || 'N/A'}
        </span>
      </div>
    </article>
  );
}
