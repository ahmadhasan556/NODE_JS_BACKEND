import URLs from "../models/URL.js";

export const saveUrl = async (req, res) => {
  const { longUrl } = req.body;
  try {
    const newUrl = new URLs({ longUrl: longUrl });
    const savedRef = await newUrl.save();
    const shortId = savedRef._id;

    const shortUrl = `${process.env.SERVER_URL}/${shortId}`;
    res.status(200).json({
      ok: true,
      shortUrl: shortUrl,
    });
  } catch (error) {
    res.status(500).json({ message: "Error while saving URL" });
  }
};

export const RedirectUrl = async (req, res) => {
  const { shortId } = req.params;
  try {
    const resUrl = await URLs.find({ _id: shortId });
    const element = resUrl[0];
    console.log(element);

    res.redirect(element.longUrl);
  } catch (error) {
    res.status(500).json({ message: "Error while redirecting URL" });
  }
};
