const Iphone16Mockup = ({
  videoId,
  imageSrc,
  className = "",
  loading = "lazy",
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Main iPhone Container with realistic shadow */}
      <div className="relative w-[340px] h-[720px]">
        {/* iPhone Frame with realistic gradient and metallic look */}
        <div className="relative w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 rounded-[55px] p-[3px]">
          {/* Inner metallic rim */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-200 via-gray-300 to-gray-500 rounded-[52px] p-[2px]">
            {/* Screen bezel */}
            <div className="relative w-full h-full bg-black rounded-[50px] p-[1px]">
              {/* Actual screen area */}
              <div className="relative w-full h-full bg-black rounded-[49px] overflow-hidden">
                {/* Dynamic Island */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-36 h-8 bg-black rounded-full z-30 border border-gray-800">
                  {/* Camera lens */}
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gray-900 rounded-full border border-gray-600"></div>
                  {/* Speaker grille */}
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-2 bg-gray-900 rounded-full"></div>
                </div>

                {/* Screen content area */}
                <div className="absolute inset-0 rounded-[49px] overflow-hidden bg-white">
                  {videoId ? (
                    <iframe
                      src={`https://customer-64sz73htfhb823gb.cloudflarestream.com/${videoId}/iframe?poster=https%3A%2F%2Fcustomer-64sz73htfhb823gb.cloudflarestream.com%2F${videoId}%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600&autoplay=true&loop=true&muted=true&controls=false`}
                      loading={loading}
                      style={{
                        border: "none",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                      }}
                      allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                      className="rounded-[49px]"
                      allowFullScreen={true}
                    />
                  ) : imageSrc ? (
                    <img
                      src={imageSrc}
                      alt="iPhone mockup content"
                      loading={loading}
                      className="w-full h-full object-cover rounded-[49px]"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-[49px] flex items-center justify-center">
                      <span className="text-gray-400 text-sm">No content</span>
                    </div>
                  )}
                </div>

                {/* Home indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[134px] h-[5px] bg-black bg-opacity-40 rounded-full z-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Side Buttons */}
        {/* Volume buttons */}
        <div className="absolute -left-[2px] top-[140px] w-[4px] h-[32px] bg-gradient-to-r from-gray-400 to-gray-500 rounded-l-sm shadow-inner"></div>
        <div className="absolute -left-[2px] top-[185px] w-[4px] h-[32px] bg-gradient-to-r from-gray-400 to-gray-500 rounded-l-sm shadow-inner"></div>
        <div className="absolute -left-[2px] top-[230px] w-[4px] h-[32px] bg-gradient-to-r from-gray-400 to-gray-500 rounded-l-sm shadow-inner"></div>

        {/* Power button */}
        <div className="absolute -right-[2px] top-[200px] w-[4px] h-[80px] bg-gradient-to-l from-gray-400 to-gray-500 rounded-r-sm shadow-inner"></div>

        {/* Subtle screen reflection overlay */}
        {/* <div className="absolute inset-3 rounded-[49px] bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none z-20"></div> */}

        {/* Edge highlights for premium look */}
        {/* <div className="absolute inset-0 rounded-[55px] bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none"></div> */}

        {/* Bottom edge shadow for depth */}
        <div className="absolute bottom-0 left-4 right-4 h-2 bg-black/20 blur-sm rounded-full transform translate-y-1"></div>
      </div>
    </div>
  );
};

export default Iphone16Mockup;
