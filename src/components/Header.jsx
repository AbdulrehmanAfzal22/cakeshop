import ArrowIcon from './ArrowIcon.jsx';

const announcements = [
  'Custom celebration cakes · Lahore, Pakistan',
  'Made to order with a little magic',
  'Birthday, floral & milestone designs',
  'Make your next celebration extra sweet',
];

function AnnouncementGroup({ duplicate = false }) {
  return (
    <div className="topline-group" aria-hidden={duplicate || undefined}>
      {announcements.map((message, index) => (
        <span className="topline-item" key={message}>
          <span aria-hidden="true">{index % 2 === 0 ? '✦' : '✧'}</span>
          {message}
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  return (
    <>
      <a className="skip" href="#collection">Skip to cakes</a>
      <div className="topline" role="region" aria-label="Cakes Galaxy announcements">
        <div className="topline-track">
          <AnnouncementGroup />
          <AnnouncementGroup duplicate />
        </div>
      </div>
      <header className="nav shell">
        <a className="brand" href="#top">
          <img src="/assets/logo.webp" alt="" width="46" height="46" />
          <span>Cakes Galaxy</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#collection">The cake collection</a>
          <a href="#order">Custom orders</a>
        </nav>
        <a className="button outline" href="#order">
          Order a cake <ArrowIcon />
        </a>
      </header>
    </>
  );
}
