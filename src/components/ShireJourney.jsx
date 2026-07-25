const journeySteps = [
  {
    title: 'Wake at the Town Gate',
    tone: 'Civic spark',
    text: 'Start at the Town Hall and the Cross: the first lantern in the story and the easiest place to orient yourself.',
    reward: 'Town Hall · Auld Kirk · library',
  },
  {
    title: 'Follow the Water Road',
    tone: 'Canal shimmer',
    text: 'Move along the Forth & Clyde towpath where the town opens into water, reeds, and long low horizons.',
    reward: 'Canal · towpath · boats',
  },
  {
    title: 'Find the Old Wall',
    tone: 'Roman lore',
    text: 'Peel Park and the Antonine line give the town its oldest layer — a frontier you can still feel in the ground.',
    reward: 'Peel Park · Roman fort · memorial gate',
  },
  {
    title: 'Climb to the Hills',
    tone: 'Sky route',
    text: 'Keep moving east and the Campsie and Kilsyth skyline starts to hold the whole town in a wider frame.',
    reward: 'Bar Hill · Campsie Fells · countryside edge',
  },
  {
    title: 'Return by the Marina',
    tone: 'Water ending',
    text: 'End at Auchinstarry where the route softens into marina water, food stops, and a wider world beyond town.',
    reward: 'Auchinstarry · trails · loch-country feel',
  },
];

function StepCard({ step, index }) {
  return (
    <article className="radar-card journey-card">
      <div className="journey-card-top">
        <div>
          <div className="journey-index">0{index + 1}</div>
          <div className="journey-tone">{step.tone}</div>
        </div>
        <div className="journey-sigil" aria-hidden="true">✦</div>
      </div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
      <div className="journey-reward">{step.reward}</div>
    </article>
  );
}

export default function ShireJourney() {
  return (
    <section className="shire-journey-section">
      <div className="shire-journey-header">
        <div>
          <div className="section-eyebrow">Quest path</div>
          <h2>Walk the town like a game map.</h2>
        </div>
        <p>
          This is the “almost a game” layer: a route you can read in chapters, with lore beats instead of plain menu blocks.
        </p>
      </div>

      <div className="shire-journey-track" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="shire-journey-grid">
        {journeySteps.map((step, index) => (
          <StepCard key={step.title} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
