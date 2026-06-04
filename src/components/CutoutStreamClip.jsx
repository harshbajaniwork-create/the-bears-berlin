const STREAM_HOST =
  "https://customer-64sz73htfhb823gb.cloudflarestream.com";

export function getCutoutStreamSrc(videoId) {
  const poster = encodeURIComponent(
    `${STREAM_HOST}/${videoId}/thumbnails/thumbnail.jpg?time=&height=600`
  );
  return `${STREAM_HOST}/${videoId}/iframe?poster=${poster}&autoplay=true&loop=true&muted=true&controls=false&letterboxColor=transparent&preload=true`;
}

const CutoutStreamClip = ({
  videoId,
  scale = 1.45,
  loading = "lazy",
  className = "",
}) => {
  return (
    <div
      className={`relative aspect-[9/16] overflow-hidden rounded-lg md:rounded-xl bg-black ${className}`}
    >
      <iframe
        src={getCutoutStreamSrc(videoId)}
        title=""
        loading={loading}
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
        className="pointer-events-none absolute left-1/2 top-1/2 border-0"
        style={{
          width: "100%",
          height: "100%",
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      />
    </div>
  );
};

export default CutoutStreamClip;
