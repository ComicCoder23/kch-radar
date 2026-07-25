import { Link } from 'react-router-dom';
import ShireAmbienceToggle from './ShireAmbienceToggle';
import './Hero.css';

const fairies = [
  { top: '14%', left: '8%', delay: '0s' },
  { top: '22%', left: '76%', delay: '1.2s' },
  { top: '62%', left: '18%', delay: '0.4s' },
  { top: '74%', left: '86%', delay: '1.6s' },
  { top: '46%', left: '92%', delay: '0.8s' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-fairy-field" aria-hidden="true">
          {fairies.map((fairy, index) => (
            <span
              key={`${fairy.top}-${fairy.left}`}
              className="hero-fairy"
              style={{ top: fairy.top, left: fairy.left, animationDelay: fairy.delay }}
            >
              <i />
              <b>{index % 2 === 0 ? '✦' : '❈'}</b>
            </span>
          ))}
        </div>

        <div className="hero-copy">
          <p className="hero-eyebrow">Kirkintilloch as a living shire</p>
          <h1>Enter the town like a fairytale quest.</h1>
          <p className="hero-intro">
            Follow the lanterns from the town hall to the old wall, along the canal shimmer, past the memorial gate,
            and out toward the hills, woods, and water that make this small place feel much bigger.
          </p>

          <div className="hero-actions">
            <Link to="/report" className="hero-button hero-button-primary">Begin the journey</Link>
            <Link to="/signals" className="hero-button hero-button-secondary">Browse the realm</Link>
            <Link to="/submit" className="hero-button hero-button-secondary">Add a local tale</Link>
          </div>

          <div className="hero-tags" aria-label="Who this is for">
            <span>Residents</span>
            <span>Visitors</span>
            <span>Organisers</span>
            <span>Venues</span>
          </div>

          <div className="hero-mini-note">
            Think: town hall, Auld Kirk, Peel Park, the towpath, the Luggie, the hills, and the wider trail network.
          </div>
        </div>

        <div className="hero-panel" aria-label="What KCH does">
          <div>
            <div className="hero-panel-label">What KCH does</div>
            <ul>
              <li>Turns Kirkintilloch into a story-first map instead of a blank dashboard</li>
              <li>Highlights real places, routes, and community points of interest</li>
              <li>Lets visitors move in chapters: town, water, wall, hills, and return</li>
              <li>Makes the page feel like the opening scene of a game</li>
            </ul>
          </div>

          <div className="hero-panel-bottom">
            <ShireAmbienceToggle />
            <div className="hero-panel-note">
              Tap to wake the music: a soft water-and-breeze bed with little bell glints, meant to feel like stepping into the first frame of the shire.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
