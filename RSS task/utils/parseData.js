let Parser = require("rss-parser");
let parser = new Parser();
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapboxToken =
  "pk.eyJ1IjoiZ3VzdGVsbG8xZyIsImEiOiJja254OHprbjYxNDhxMm9ybXRxeTRwdWNrIn0.rqSoirlR4XFZgl40fBFeYw";
const geocoder = mbxGeocoding({ accessToken: mapboxToken });

const parseData = async () => {
  let feed = await parser.parseURL(
    "https://www.rotanacareers.com/live-bookmarks/all-rss.xml"
  );
  const reformatFeed = (item) => {
    const promises = feed.items.map(async (item) => {
      let getLocation = item.contentSnippet.match(/Location:\n(.*)/)[1];
      const geoData = await geocoder
        .forwardGeocode({
          query: getLocation,
          limit: 1,
        })
        .send();

      return {
        title: item.title,
        location: getLocation,
        geoData: geoData.body.features[0].geometry,
      };
    });
    return Promise.all(promises);
  };
  return reformatFeed();
};

module.exports = parseData;
