export default function Media() {
  return (
    <div>
      <p>
        {" "}
        Embed from my first ever podcast, which was recorded in April 2022 just
        after I graduated from my coding bootcamp. I talk about the importance
        of mental health and my journey into tech.
      </p>
      <iframe
        className="p-6"
        src="https://open.spotify.com/embed/episode/33hLERPWvnLNvgh1xRIeMe?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
