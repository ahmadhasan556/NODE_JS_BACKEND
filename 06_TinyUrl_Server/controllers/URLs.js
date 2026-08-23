import { URLs } from "../models/URL.js";
import { generateShortId } from "../utils/keys.js";
// localhost:9090/save , body {longUrl,}
export const saveUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const shortId = generateShortId(7); // yt6hgf7
    const newUrl = new URLs({ longUrl: longUrl, shortId: shortId });
    await newUrl.save();

    const shortUrl = `${process.env.SERVER_URL}/${shortId}`;
    // localhost:9090/yt6hgf7
    res.status(200).json({
      ok: true,
      shortUrl: shortUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while saving URL" });
  }
};

// https://www.google.com/search?q=.&rlz=1C1VDKB_enPK1145PK1145&oq=.&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDsyBggCEEUYO9IBBjYzajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8

// localhost:9090/yt6hgf7
export const RedirectUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const resUrl = await URLs.find({ shortId: shortId });
    const element = resUrl[0];
    console.log(element);

    res.redirect(element.longUrl);
  } catch (error) {
    res.status(500).json({ message: "Error while redirecting URL" });
  }
};
