const STAR_PATH =
  'M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z';

export const starMarkup = (percent = 0) => {
  let id = Date.now() + Math.random();
  return `<div style="width: 18px; display: flex; justify-content: center; align-items: center">
    <svg id="starSVG" width="14" height="14" viewBox="0 0 14 14">
      <path
        d="${STAR_PATH}"
        fill="rgba(244, 244, 244, 0.2)"
      />
      <clipPath id="starClip${id}">
        <rect id="fillRect" x="0" y="0" width="${percent}%" height="100%" />
      </clipPath>
      <path
        d="${STAR_PATH}"
        fill="#EEA10C"
        clip-path="url(#starClip${id})"
      />
    </svg>
  </div>`;
};
