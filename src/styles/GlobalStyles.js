import { createGlobalStyle } from 'styled-components';
import { devicesMax } from './breakpoint';
// import { devicesMax } from './breakpoint';

const breakpoints = {
	xs: '320px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px',
};

export const devices = {
	xs: `(min-width: ${breakpoints.xs})`,
	sm: `(min-width: ${breakpoints.sm})`,
	md: `(min-width: ${breakpoints.md})`,
	lg: `(min-width: ${breakpoints.lg})`,
	xl: `(min-width: ${breakpoints.xl})`,
	'2xl': `(min-width: ${breakpoints['2xl']})`,
};

const GlobalStyles = createGlobalStyle`:root {


--color-primary-900:#104b53;
--color-secoundary-900: #d99b5e;
--color-textiary-900:#fad9b8;

--color-white-100: #fff;
--color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
--color-black-900:#000;

--color-facebook-900: #3b5998;
  --color-twitter-900:#1DA1F2;
  --color-youtube-900:#CD201F;
  --color-tiktok-900:#00f2ea;
  --color-instragram-900:#d62976;
  --color-whatsapp-900:#25d366;

  --color-facebook-500: #4060a4;
  --color-twitter-500:#8ED0F8;
  --color-youtube-500:#EB7978;
  --color-tiktok-500:#7bfffb;
  --color-instragram-500:#e470a4;
  --color-whatsapp-500:#68e597;


  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;
  --Border-radius-cir:100px;

  /* For dark mode */
  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

@media ${devicesMax.lg} {
font-size: 60%;
}
@media ${devicesMax.md} {
font-size: 55%;
}
@media ${devicesMax.md} {
font-size: 50%;
}
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  width: 100vw;
   overflow-x: hidden;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-black-950);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

`;
export default GlobalStyles;
