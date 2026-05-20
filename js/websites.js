const websites = {
  "Windows 96": "https://www.windows96.net/",
  "Windows 93": "https://www.windows93.net/",
  "VOLE.wtf": "https://vole.wtf/",
  "david.li": "https://david.li/",
  "Geek Prank": "https://geekprank.com/",
  "Fake Update": "https://fakeupdate.net/",
  "Web Zone": "https://fediafedia.com/",
  "copy.sh": "http://copy.sh/",
  "neal.fun": "https://neal.fun/",
  "Emu OS": "https://emupedia.net/beta/emuos/",
  "OS.js": "https://demo.os-js.org/",
  "MSCHF": "https://mschf.xyz/",
  "Zoomquilt": "https://zoomquilt.org/",
  "Zoomquilt2": "http://zoomquilt2.com/",
  "Little Alchemy": "https://littlealchemy.com/",
  "Little Alchemy2": "https://littlealchemy2.com/",
  "The Useless Web": "https://theuselessweb.com/",
  "Wierd Or Confusing": "https://weirdorconfusing.com/",
  "Flash By Night": "http://www.flashbynight.com/",
  "Bouncy Balls": "https://bouncyballs.org/",
  "Weave Silk": "http://weavesilk.com/",
  "Prismarine Web": "https://mcon.vercel.app/",
  "Minecraft Classic": "https://classic.minecraft.net/",
  "Webamp": "https://webamp.org/",
  "Adult Swim Etcetera": "https://www.adultswim.com/etcetera/",
  "GeoFS": "https://www.geo-fs.com/geofs.php",
  "Body Visualizer": "https://me.meshcapade.com/editor",
  "Bublz": "http://bublz.us/",
  "Land Lines": "https://lines.chromeexperiments.com/",
  "Fluid Simulation": "https://paveldogreat.github.io/WebGL-Fluid-Simulation/",
  "Pointer Pointer": "https://pointerpointer.com/",
  "Cat Trap Game": "https://llerrah.com/cattrap.htm",
  "Busy Simulator": "https://busysimulator.com/",
  "Everyone Draw": "https://everyonedraw.com",
  "ZType": "https://zty.pe/",
  "Slowroads": "https://slowroads.io/",
  "Play-CS": "https://play-cs.com/",
  "Noclip Website": "https://noclip.website",
  "GTA GeoGuesser": "https://gta-geoguesser.com/",
  "Plays.org": "https://plays.org/",
  "Patatap": "https://www.patatap.com/",
  "Quick, Draw!": "https://quickdraw.withgoogle.com/",
  "EaglerCraft": "https://eaglercraft.com/",
  "Lostgamer": "https://lostgamer.io/",
  "Townscaper": "https://oskarstalberg.com/Townscaper/",
  "Text Particles": "https://williamhoza.com/text/?t=Hello",
  "Sandtris": "https://sandtris.com/",
  "Higher or Lower game": "http://www.higherlowergame.com/",
  "Trash Loop": "https://www.trashloop.com/",
  "Guess The Price": "https://guesstheprice.net/",
  "Infinite Craft": "https://neal.fun/infinite-craft/",
  "Cursor Party": "https://cursordanceparty.com/",
  "Radio Garden": "https://radio.garden",
  "Sandboxels": "https://sandboxels.r74n.com/",
  "Amazon Dating": "https://amazondating.co/",
  "Knock knock": "https://knock-knock.net/",
  "Flight Viz": "https://flight-viz.com/",
  "Design tools": "https://studio.neato.fun/",
};

const faviconOverrides = {
  "fediafedia.com": "https://fediafedia.com/img/favicon.ico",
  "gta-geoguesser.com": "https://gta-geoguesser.com//static/assets/img/favicon.ico",
  "studio.neato.fun": "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2227%22%20height%3D%2227%22%20viewBox%3D%220%200%2027%2027%22%20shape-rendering%3D%22crispEdges%22%3E%3Cdefs%3E%3CclipPath%20id%3D%22c%22%3E%3Crect%20width%3D%2227%22%20height%3D%2227%22%20rx%3D%225%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg%20clip-path%3D%22url(%23c)%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ffd400%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%220%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ffd400%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%223%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23009940%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ffd400%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%226%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ffd400%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%229%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ffd400%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2212%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23d580ff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23997f00%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23d580ff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2215%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23d580ff%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%2380aaff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff8000%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23d580ff%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%2380aaff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2221%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%2380aaff%22%2F%3E%3Crect%20x%3D%220%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%223%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff0000%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23ff3333%22%2F%3E%3Crect%20x%3D%229%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2212%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23d580ff%22%2F%3E%3Crect%20x%3D%2215%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23bb33ff%22%2F%3E%3Crect%20x%3D%2218%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%2380aaff%22%2F%3E%3Crect%20x%3D%2221%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%2380aaff%22%2F%3E%3Crect%20x%3D%2224%22%20y%3D%2224%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23NaNNaNNaN%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
};

const getDomain = (siteUrl) => {
  try {
    return new URL(siteUrl).hostname;
  } catch {
    return siteUrl.replace(/^.*?:\/\//, '').split('/')[0];
  }
};

const getFaviconCandidates = (siteUrl) => {
  const domain = getDomain(siteUrl);
  return [
    `https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(siteUrl)}`,
    `https://www.google.com/s2/favicons?domain=${domain}`,
    `https://icons.duckduckgo.com/ip3/${domain}.ico`,
    `https://${domain}/favicon.ico`,
    `https://${domain}/favicon.png`
  ];
};

const setFavicon = (link, favicon) => {
  link.style.backgroundImage = `url('${favicon}')`;
};

const loadFavicon = (link, siteUrl) => {
  const domain = getDomain(siteUrl);
  const candidates = [
    ...(faviconOverrides[domain] ? [faviconOverrides[domain]] : []),
    ...getFaviconCandidates(siteUrl)
  ];

  let current = 0;
  const tryNext = () => {
    if (current >= candidates.length) return;

    const iconUrl = candidates[current++];
    const img = new Image();
    img.onload = () => setFavicon(link, iconUrl);
    img.onerror = tryNext;
    img.src = iconUrl;
  };

  tryNext();
};

const renderWebsiteCards = () => {
  const listElement = document.querySelector('.websitesList');
  if (!listElement) return;

  Object.entries(websites).forEach(([name, siteUrl]) => {
    const link = document.createElement('a');
    link.href = siteUrl;
    link.target = '_blank';
    link.rel = 'noopener';
    link.title = `${name} — ${siteUrl}`;
    link.innerHTML = `<span>${name}</span>`;
    listElement.appendChild(link);
    loadFavicon(link, siteUrl);
  });
};

document.addEventListener('DOMContentLoaded', renderWebsiteCards);
