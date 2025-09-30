export default function Home() {
  return (
    <div className="home-container">
      <main className="home-main">
        <h1 className="home-title">
          🎉 Hey Alluvo Family!
        </h1>

        <p className="home-paragraph">
          This Is{" "}
          <span className="highlight">Abdallah Nasser</span>{" "}
          speaking — your friend, a React frontend developer, and a React Native
          mobile developer. But It is not Alluvo Team It's
          <span className="highlight"> Alluvo Family</span> {""}
          Started and Continue Together For A Whole Year
        </p>

        <p className="home-paragraph">
          To my{" "}
          <span className="friends">Alluvo friends</span>:
          this isn’t just a graduation project—it’s our story, full of late
          nights, laughs, bugs, fixes, and a whole lot of memories in the
          making. We’re not just coding; we’re creating something we’ll always
          look back at with a smile.
        </p>

        <p className="home-paragraph">
          And a big shoutout to my{" "}
          <span className="frontend-crew">Frontend crew</span> 💚
          Let’s make these screens not just beautiful, but alive. Together,
          we’ll make people feel the heart we put in every pixel.
        </p>

        <p className="home-shoutout">
          🚀 Let’s crush this together, Alluvo!
        </p>
      </main>
      <h5>the first line in development branch</h5>

      <footer className="home-footer">
        © {new Date().getFullYear()} Alluvo Team — built with love, laughter,
        and a ton of coffee ☕
      </footer>
    </div>
  );
}
