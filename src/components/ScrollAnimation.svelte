<style>
  .mouse {
    position: fixed;
    width: 85px;
    left: 50%;
    bottom: -1vh;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row;
    /* padding: 5px 15px; */
    z-index: 999999999;
    align-self: flex-end;
    justify-content: center;
    animation: scrollDot 2s ease-in-out infinite,
      color_rotate 5s linear infinite;
  }

  @keyframes scrollDot {
    0% {
      bottom: -2vh;
    }
    50% {
      bottom: 0vh;
    }
    100% {
      mbottom: -2vh;
    }
  }
</style>

<div class="mouse ">
  <svg
    width="298"
    height="298"
    viewBox="0 0 298 298"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <circle
      cx="149"
      cy="149"
      r="149"
      fill="url(#paint0_radial)"
      fill-opacity="0.04" />
    <circle cx="148.276" cy="148.276" r="72.5178" fill="white" />
    <g filter="url(#filter0_f)">
      <circle cx="148.5" cy="148.5" r="89.5" fill="url(#paint1_linear)" />
    </g>
    <g filter="url(#filter1_d)">
      <circle
        cx="148.524"
        cy="148.524"
        r="89.1448"
        fill="url(#paint2_linear)" />
      <circle
        cx="148.524"
        cy="148.524"
        r="89.1448"
        fill="url(#paint3_linear)"
        fill-opacity="0.3" />
      <circle
        cx="148.524"
        cy="148.524"
        r="82.6448"
        stroke="white"
        stroke-width="13" />
    </g>
    <g filter="url(#filter2_i)">
      <path
        d="M143.928 194.431C146.466 196.97 150.582 196.97 153.12 194.431L194.486
        153.065C197.024 150.527 197.024 146.411 194.486 143.873C191.947 141.335
        187.832 141.335 185.293 143.873L148.524 180.643L111.754 143.873C109.216
        141.335 105.1 141.335 102.562 143.873C100.023 146.411 100.023 150.527
        102.562 153.065L143.928 194.431ZM142.024 107.213L142.024 189.835L155.024
        189.835L155.024 107.213L142.024 107.213Z"
        fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_f"
        x="27"
        y="27"
        width="243"
        height="243"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape" />
        <feGaussianBlur stdDeviation="16" result="effect1_foregroundBlur" />
      </filter>
      <filter
        id="filter1_d"
        x="55.379"
        y="59.3789"
        width="186.29"
        height="186.29"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape" />
      </filter>
      <filter
        id="filter2_i"
        x="100.658"
        y="107.213"
        width="95.7315"
        height="93.122"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
      </filter>
      <radialGradient
        id="paint0_radial"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(149 152.5) rotate(90) scale(145.5)">
        <stop />
        <stop offset="1" stop-opacity="0" />
      </radialGradient>
      <linearGradient
        id="paint1_linear"
        x1="81.4772"
        y1="86.3813"
        x2="218.792"
        y2="208.167"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#13BB6B" />
        <stop offset="0.494792" stop-color="#3698CF" />
        <stop offset="1" stop-color="#9749D5" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="87.3196"
        y1="81.5387"
        x2="203.9"
        y2="223.651"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="#13BB6B" />
        <stop offset="0.458333" stop-color="#3698CF" />
        <stop offset="1" stop-color="#9749D5" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="142.5"
        y1="68"
        x2="149"
        y2="230"
        gradientUnits="userSpaceOnUse">
        <stop stop-color="white" />
        <stop offset="0.489583" stop-color="#7C7C7C" stop-opacity="0" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>

</div>
